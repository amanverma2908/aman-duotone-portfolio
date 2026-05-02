import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Loader2, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface BlogPost {
  title: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  description: string;
  categories: string[];
}

export function Blog() {
  const container = useRef<HTMLDivElement>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Feel free to update your Medium username here
  const mediumUsername = '@midnightcoder'; 

  useEffect(() => {
    const controller = new AbortController();

    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${mediumUsername}`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error('Unable to fetch Medium posts.');
        }

        const data = await response.json();
        
        if (data.status === 'ok' && data.items && data.items.length > 0) {
          const formattedPosts = data.items.slice(0, 4).map((item: any) => {
            // Extract the first image from content if thumbnail is missing
            let thumbnail = item.thumbnail;
            if (!thumbnail || thumbnail === '') {
              const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
              thumbnail = imgMatch ? imgMatch[1] : ''; 
            }

            // Strip HTML from description for excerpt
            const strippedDesc = item.description.replace(/<[^>]*>?/gm, '');
            const excerpt = strippedDesc.length > 150 ? strippedDesc.substring(0, 150) + '...' : strippedDesc;

            return {
              title: item.title,
              pubDate: new Date(item.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
              link: item.link,
              thumbnail: thumbnail,
              description: excerpt,
              categories: item.categories || [],
            };
          });
          setPosts(formattedPosts);
        } else {
          // If no posts or invalid username, we just show empty state
          setPosts([]);
        }
      } catch (err) {
        if (controller.signal.aborted) return;
        setError('Error fetching posts.');
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchPosts();

    return () => controller.abort();
  }, [mediumUsername]);

  useGSAP(
    () => {
      if (loading) return;
      
      const elements = gsap.utils.toArray('.blog-anim');
      
      elements.forEach((el: any, i: number) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            },
          }
        );
      });
    },
    { scope: container, dependencies: [loading, posts] }
  );

  return (
    <section 
      ref={container}
      id="blog" 
      className="py-16 md:py-24 lg:py-40 px-6 md:px-12 lg:px-16 bg-paper dark:bg-ink border-t border-ink/10 dark:border-paper/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-ink/10 dark:border-paper/10 pb-6 md:pb-8">
          <div className="relative">
            <span className="absolute -top-8 md:-top-10 -left-2 md:-left-4 text-[80px] md:text-[100px] lg:text-[120px] font-display font-black text-transparent [-webkit-text-stroke:1px_var(--color-ink)] dark:[-webkit-text-stroke:1px_var(--color-paper)] opacity-10 leading-none select-none z-0">
              05
            </span>
            <h2 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-accent text-ink dark:text-paper pt-6 md:pt-8 w-fit">
              Blogs
            </h2>
          </div>
          
          <a href={`https://medium.com/${mediumUsername}`} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-sm font-sans uppercase tracking-[0.2em] font-medium hover:opacity-60 transition-opacity mt-8 md:mt-0 pb-2">
            View all articles <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        
        <div className="w-full">
          {loading ? (
            <div className="flex h-40 items-center justify-center animate-pulse">
              <Loader2 className="h-8 w-8 animate-spin text-ink/50 dark:text-paper/50" />
            </div>
          ) : error || posts.length === 0 ? (
            <div className="blog-anim p-12 lg:p-24 border border-ink/10 dark:border-paper/10 text-center flex flex-col items-center justify-center bg-ink/5 dark:bg-paper/5">
              <p className="text-xl font-medium text-ink/70 dark:text-paper/70 font-sans mb-4">
                No recent stories found.
              </p>
              <p className="text-sm font-mono text-ink/50 dark:text-paper/50">
                Update the `mediumUsername` or complete your first Medium story.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
              {posts.map((post, i) => (
                <a key={i} href={post.link} target="_blank" rel="noopener noreferrer" className={`blog-anim group flex flex-col gap-5 cursor-none w-full ${i === 3 ? 'lg:hidden' : ''}`}>
                  {post.thumbnail ? (
                    <div className="w-full aspect-[16/10] overflow-hidden bg-ink/5 dark:bg-paper/5 relative">
                      <img 
                        src={post.thumbnail} 
                        alt={post.title}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-ink/10 dark:bg-paper/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  ) : (
                    <div className="w-full aspect-[16/10] overflow-hidden bg-ink/5 dark:bg-paper/5 relative flex items-center justify-center border border-ink/10 dark:border-paper/10">
                      <span className="font-display font-black text-4xl opacity-10">BLOG</span>
                      <div className="absolute inset-0 bg-ink/5 dark:bg-paper/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  )}
                  
                  <div className="flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4 text-xs font-mono uppercase tracking-[0.2em] text-ink/50 dark:text-paper/50">
                      <span>{post.pubDate}</span>
                      {post.categories.length > 0 && (
                        <>
                          <span className="w-1 h-1 bg-ink/30 dark:bg-paper/30 rounded-full" />
                          <span className="truncate max-w-[140px] px-2 py-0.5 border border-ink/10 dark:border-paper/10 font-medium">
                            {post.categories[0]}
                          </span>
                        </>
                      )}
                    </div>
                    
                    <h3 className="text-xl lg:text-2xl leading-tight font-display font-bold tracking-tight mb-3 group-hover:text-ink/80 dark:group-hover:text-paper/80 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-ink/60 dark:text-paper/60 line-clamp-2 leading-relaxed mb-6 font-sans">
                      {post.description}
                    </p>
                    
                    <div className="mt-auto flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest border-b border-ink/30 dark:border-paper/30 pb-1 w-fit md:opacity-0 group-hover:opacity-100 md:translate-y-4 group-hover:translate-y-0 transition-all duration-[400ms] ease-out">
                      Read Article <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
