"use client"
import { useState, useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, Eye, Heart, MessageCircle } from "lucide-react"

export function BlogSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const blogPosts = [
    {
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt:
        "Exploring emerging technologies and frameworks that will shape the future of web development, including AI integration and serverless architectures.",
      date: "2024-12-15",
      readTime: "8 min read",
      category: "Web Development",
      image: "/blog-web-development-trends.jpg",
      views: 1250,
      likes: 89,
      comments: 23,
      featured: true,
    },
    {
      title: "Building Scalable React Applications: Best Practices",
      excerpt:
        "A comprehensive guide to structuring React applications for scalability, performance, and maintainability in enterprise environments.",
      date: "2024-12-10",
      readTime: "12 min read",
      category: "React",
      image: "/blog-react-scalability.jpg",
      views: 980,
      likes: 67,
      comments: 15,
      featured: false,
    },
    {
      title: "Digital Marketing in the Age of AI",
      excerpt:
        "How artificial intelligence is revolutionizing digital marketing strategies and what it means for businesses and marketers.",
      date: "2024-12-05",
      readTime: "6 min read",
      category: "Digital Marketing",
      image: "/blog-ai-marketing.jpg",
      views: 756,
      likes: 45,
      comments: 12,
      featured: false,
    },
    {
      title: "My Journey as a Computer Science Student at ULAB",
      excerpt:
        "Sharing experiences, challenges, and learnings from my computer science journey at University of Liberal Arts Bangladesh.",
      date: "2024-11-28",
      readTime: "10 min read",
      category: "Personal",
      image: "/blog-ulab-journey.jpg",
      views: 1100,
      likes: 78,
      comments: 34,
      featured: true,
    },
  ]

  return (
    <section id="blog" ref={sectionRef} className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Latest <span className="text-gradient">Insights</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Sharing knowledge, experiences, and insights about technology, development, and the journey of continuous
              learning.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {blogPosts
              .filter((post) => post.featured)
              .map((post, index) => (
                <Card
                  key={index}
                  className="overflow-hidden bg-card border-border hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group cursor-pointer"
                >
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                    <div className="text-6xl opacity-20">📝</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="secondary" className="bg-accent/10 text-accent">
                        {post.category}
                      </Badge>
                      <Badge variant="outline">Featured</Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {post.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {post.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {post.comments}
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="group-hover:bg-accent group-hover:text-accent-foreground"
                      >
                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts
              .filter((post) => !post.featured)
              .map((post, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group cursor-pointer"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <Badge variant="secondary" className="bg-accent/10 text-accent">
                      {post.category}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {post.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        {post.likes}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 bg-transparent"
            >
              View All Posts <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
