import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';

// Helper function to format date
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    // Fetch blog post data
    fetch('/data/blog-posts.csv')
      .then(response => response.text())
      .then(csv => {
        // Parse CSV and find matching post
        const lines = csv.split('\n');
        const headers = lines[0].split(',');
        const posts = lines.slice(1).map(line => {
          const values = line.split(',');
          return headers.reduce((obj, header, index) => {
            // Remove quotes from values
            obj[header] = values[index]?.replace(/^"|"$/g, '') || '';
            return obj;
          }, {});
        });
        
        const foundPost = posts.find(p => p.slug === slug);
        setPost(foundPost);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading blog post:', error);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
    </div>;
  }

  if (!post) {
    return <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">Post not found</h1>
    </div>;
  }

  return (
    <>
      <Head>
        <title>{post.title} | ShelVey</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.featuredImage} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Featured Image */}
        <div className="relative w-full h-[400px] mb-8">
          {post.featuredImage && (
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          )}
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            {/* Author Image */}
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              {post.authorImage && (
                <Image
                  src={post.authorImage}
                  alt={post.authorName}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              )}
            </div>
            
            {/* Author Info */}
            <div>
              <h3 className="font-semibold">{post.authorName}</h3>
              <p className="text-gray-600">{post.authorRole}</p>
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex items-center gap-4 text-gray-600 mb-4">
            <span>{formatDate(post.date)}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span>{post.category}</span>
          </div>

          <p className="text-xl text-gray-600">{post.excerpt}</p>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        {/* Author Bio */}
        <footer className="mt-12 p-6 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-6">
            <div className="relative w-20 h-20 rounded-full overflow-hidden">
              {post.authorImage && (
                <Image
                  src={post.authorImage}
                  alt={post.authorName}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              )}
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">{post.authorName}</h3>
              <p className="text-gray-600">{post.authorBio}</p>
            </div>
          </div>
        </footer>
      </article>
    </>
  );
} 