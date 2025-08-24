import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Search, Tag, ArrowRight, Eye } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import SEO from '../components/SEO';
import { siteContent } from '../data/content';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const heroSlides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
      title: 'Travel Blog',
      subtitle: 'Stories, Tips & Guides',
      description: 'Discover insider travel tips, destination guides, and inspiring stories from fellow travelers exploring incredible India.',
      buttonText: 'Read Stories'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Posts' },
    { value: 'travel-tips', label: 'Travel Tips' },
    { value: 'destinations', label: 'Destinations' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'culture', label: 'Culture' },
    { value: 'food', label: 'Food & Cuisine' }
  ];

  // Extended blog posts for demo
  const allBlogPosts = [
    ...siteContent.blog,
    {
      id: 5,
      title: 'Goa Beyond Beaches: Hidden Gems to Explore',
      excerpt: 'Discover the lesser-known attractions of Goa including ancient temples, spice plantations, and Portuguese heritage sites.',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
      category: 'Destinations',
      author: 'Anjali Patel',
      date: '2024-01-25',
      readTime: '6 min read',
      views: 245,
      content: `Goa is renowned for its beautiful beaches, but there's so much more to discover in this coastal paradise...`
    },
    {
      id: 6,
      title: 'Street Food Guide: Must-Try Dishes Across India',
      excerpt: 'A comprehensive guide to India\'s diverse street food culture, from Mumbai\'s vada pav to Delhi\'s chaat.',
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg',
      category: 'Food & Cuisine',
      author: 'Rohit Sharma',
      date: '2024-01-20',
      readTime: '12 min read',
      views: 387,
      content: `India's street food scene is a vibrant tapestry of flavors, aromas, and experiences...`
    },
    {
      id: 7,
      title: 'Monsoon Magic: Best Places to Visit During Rains',
      excerpt: 'Experience India\'s monsoon season at its best with our guide to the most beautiful rainy season destinations.',
      image: 'https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg',
      category: 'Travel Tips',
      author: 'Priya Sharma',
      date: '2024-01-15',
      readTime: '8 min read',
      views: 198,
      content: `The monsoon season transforms India into a lush, green paradise...`
    },
    {
      id: 8,
      title: 'Cultural Festivals of India: A Year-Round Guide',
      excerpt: 'Plan your travels around India\'s colorful festivals including Diwali, Holi, Durga Puja, and regional celebrations.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      category: 'Culture',
      author: 'Vikram Singh',
      date: '2024-01-10',
      readTime: '15 min read',
      views: 456,
      content: `India's calendar is packed with vibrant festivals that offer unique travel experiences...`
    }
  ];

  const filteredPosts = allBlogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || 
      post.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Travel Tips': 'bg-blue-100 text-blue-800',
      'Destinations': 'bg-green-100 text-green-800',
      'Adventure': 'bg-red-100 text-red-800',
      'Culture': 'bg-purple-100 text-purple-800',
      'Food & Cuisine': 'bg-orange-100 text-orange-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <SEO
        title="Travel Blog - Hivix Tour & Travel | India Travel Stories & Tips"
        description="Read inspiring travel stories, destination guides, and expert tips for exploring India. Get insider knowledge from experienced travelers and local experts."
        keywords="India travel blog, travel stories, destination guides, travel tips, India tourism, travel experiences"
      />

      {/* Hero Section */}
      <HeroSlider slides={heroSlides} height="h-[60vh]" autoRotate={false} />

      {/* Filters Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-lg"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <motion.button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.value
                        ? 'bg-gradient-to-r from-blue-600 to-orange-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category.label}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredPosts.length} articles
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {!searchTerm && selectedCategory === 'all' && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Featured Article
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most popular travel story this month
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="md:flex">
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img
                    src={allBlogPosts[0].image}
                    alt={allBlogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(allBlogPosts[0].category)}`}>
                      {allBlogPosts[0].category}
                    </span>
                    <span className="text-blue-600 font-medium">Featured</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    {allBlogPosts[0].title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {allBlogPosts[0].excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{allBlogPosts[0].author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(allBlogPosts[0].date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{allBlogPosts[0].readTime}</span>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    onClick={() => setSelectedPost(allBlogPosts[0])}
                    className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-orange-600 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {searchTerm ? 'Search Results' : selectedCategory === 'all' ? 'Latest Articles' : `${categories.find(c => c.value === selectedCategory)?.label} Articles`}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {searchTerm 
                ? `Found ${filteredPosts.length} articles matching "${searchTerm}"`
                : 'Discover stories, tips, and guides from our travel experts'
              }
            </p>
          </motion.div>

          {filteredPosts.length === 0 ? (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No Articles Found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filters.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                    </div>
                    {(post as any).views && (
                      <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{(post as any).views}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {formatDate(post.date)}
                      </span>
                      <motion.button
                        onClick={() => setSelectedPost(post)}
                        className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 flex items-center space-x-1"
                        whileHover={{ x: 5 }}
                      >
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Article Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 bg-white text-gray-600 hover:text-gray-800 w-10 h-10 rounded-full flex items-center justify-center text-xl"
              >
                ×
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-center space-x-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedPost.category)}`}>
                  {selectedPost.category}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {selectedPost.title}
              </h1>

              <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{selectedPost.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(selectedPost.date)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {selectedPost.excerpt}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {selectedPost.content}
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-4">Share this article</h3>
                <div className="flex space-x-4">
                  <button className="text-blue-600 hover:text-blue-800">Facebook</button>
                  <button className="text-blue-400 hover:text-blue-600">Twitter</button>
                  <button className="text-blue-700 hover:text-blue-900">LinkedIn</button>
                  <button className="text-green-600 hover:text-green-800">WhatsApp</button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest travel tips, destination guides, and exclusive offers.
            </p>
            <div className="max-w-md mx-auto flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default BlogPage;