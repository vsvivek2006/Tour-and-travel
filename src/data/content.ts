// Content Management System - Easy to edit content
export const siteContent = {
  // Site-wide settings
  site: {
    name: 'Hivix Tour & Travel',
    tagline: 'Explore India\'s Best Destinations',
    description: 'Discover India with Hivix Tour & Travel. Rajasthan, Kerala, Kashmir, Ladakh tours. Book your dream vacation with expert guides and affordable packages.',
    phone: '+91 9341436937',
    email: 'info@hivixtours.com',
    whatsappNumber: '919341436937',
    address: '123 Travel Street, Tourism District, Mumbai, India - 400001',
    founded: '2008',
    experience: '15+',
    socialMedia: {
      facebook: '#',
      instagram: '#',
      twitter: '#',
      youtube: '#'
    }
  },

  // Hero slides for different pages
  heroSlides: {
    home: [
      {
        id: 1,
        image: 'https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg',
        title: 'Royal Rajasthan',
        subtitle: 'Discover the Land of Kings',
        description: 'Experience magnificent forts, stunning palaces, and rich cultural heritage in the desert state of Rajasthan.',
        buttonText: 'Explore Rajasthan',
        location: 'Jaipur, Udaipur, Jodhpur',
        duration: '7-12 Days'
      },
      {
        id: 2,
        image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg',
        title: 'Kashmir Paradise',
        subtitle: 'Heaven on Earth',
        description: 'Immerse yourself in the breathtaking beauty of snow-capped mountains, serene lakes, and blooming gardens.',
        buttonText: 'Visit Kashmir',
        location: 'Srinagar, Gulmarg, Pahalgam',
        duration: '5-8 Days'
      },
      {
        id: 3,
        image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg',
        title: 'Kerala Backwaters',
        subtitle: "God's Own Country",
        description: 'Cruise through tranquil backwaters, lush tea plantations, and pristine beaches in tropical Kerala.',
        buttonText: 'Explore Kerala',
        location: 'Alleppey, Munnar, Kochi',
        duration: '6-10 Days'
      },
      {
        id: 4,
        image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
        title: 'Goa Beaches',
        subtitle: 'Sun, Sand & Serenity',
        description: 'Relax on golden beaches, enjoy vibrant nightlife, and explore Portuguese colonial architecture.',
        buttonText: 'Visit Goa',
        location: 'North & South Goa',
        duration: '4-7 Days'
      },
      {
        id: 5,
        image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg',
        title: 'Ladakh Adventure',
        subtitle: 'Land of High Passes',
        description: 'Embark on an epic journey through dramatic landscapes, ancient monasteries, and pristine lakes.',
        buttonText: 'Adventure Awaits',
        location: 'Leh, Pangong, Nubra Valley',
        duration: '8-12 Days'
      }
    ]
  },

  // Tour packages
  tours: {
    specialOffers: [
      {
        id: 1,
        name: 'Yoga Tour in Rishikesh Ashram',
        location: 'Rishikesh, Uttarakhand',
        duration: '7 Days',
        price: '₹25,999',
        originalPrice: '₹35,999',
        discount: '28% OFF',
        image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg',
        description: 'Transform your mind, body, and soul in the yoga capital of the world.',
        highlights: ['Daily Yoga Sessions', 'Meditation Classes', 'Ayurvedic Meals', 'Ganga Aarti', 'Certificate Course'],
        itinerary: [
          'Day 1: Arrival & Welcome Ceremony',
          'Day 2-3: Hatha Yoga & Meditation',
          'Day 4-5: Advanced Pranayama',
          'Day 6: River Rafting & Adventure',
          'Day 7: Departure with Certificate'
        ]
      },
      {
        id: 2,
        name: 'Sikkim Darjeeling Trekking Tour',
        location: 'Sikkim & West Bengal',
        duration: '10 Days',
        price: '₹42,999',
        originalPrice: '₹55,999',
        discount: '23% OFF',
        image: 'https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg',
        description: 'Trek through pristine mountain trails with stunning Himalayan views.',
        highlights: ['Kanchenjunga Views', 'Tea Garden Visits', 'Monastery Tours', 'Mountain Trekking', 'Local Cuisine'],
        itinerary: [
          'Day 1-2: Arrival Darjeeling, Tea Gardens',
          'Day 3-4: Gangtok Exploration',
          'Day 5-6: Tsomgo Lake & Nathula Pass',
          'Day 7-8: Pelling & Khecheopalri Lake',
          'Day 9-10: Return Journey'
        ]
      },
      {
        id: 3,
        name: 'India Tiger Tour',
        location: 'Multiple National Parks',
        duration: '12 Days',
        price: '₹68,999',
        originalPrice: '₹85,999',
        discount: '20% OFF',
        image: 'https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg',
        description: 'Experience the thrill of spotting Royal Bengal Tigers in their natural habitat.',
        highlights: ['Tiger Spotting', 'Wildlife Photography', 'National Parks', 'Expert Guides', 'Luxury Lodges'],
        itinerary: [
          'Day 1-3: Ranthambore National Park',
          'Day 4-6: Bandhavgarh National Park',
          'Day 7-9: Kanha National Park',
          'Day 10-12: Jim Corbett National Park'
        ]
      },
      {
        id: 4,
        name: 'Colorful Rajasthan',
        location: 'Rajasthan',
        duration: '14 Days',
        price: '₹55,999',
        originalPrice: '₹72,999',
        discount: '23% OFF',
        image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
        description: 'Explore the vibrant culture, magnificent forts, and desert landscapes of Rajasthan.',
        highlights: ['Royal Palaces', 'Desert Safari', 'Cultural Shows', 'Local Handicrafts', 'Camel Riding'],
        itinerary: [
          'Day 1-3: Jaipur - Pink City',
          'Day 4-6: Udaipur - City of Lakes',
          'Day 7-9: Jodhpur - Blue City',
          'Day 10-12: Jaisalmer - Golden City',
          'Day 13-14: Pushkar & Return'
        ]
      },
      {
        id: 5,
        name: 'Gujarat Tribal Tour',
        location: 'Gujarat',
        duration: '8 Days',
        price: '₹38,999',
        originalPrice: '₹48,999',
        discount: '20% OFF',
        image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg',
        description: 'Discover the rich tribal heritage and salt deserts of Gujarat.',
        highlights: ['Tribal Villages', 'Rann of Kutch', 'Folk Performances', 'Local Crafts', 'Cultural Exchange'],
        itinerary: [
          'Day 1-2: Ahmedabad & Surroundings',
          'Day 3-4: Bhuj & Tribal Villages',
          'Day 5-6: White Rann Desert',
          'Day 7-8: Mandvi Beach & Return'
        ]
      }
    ],

    upcoming: [
      {
        id: 1,
        name: 'Golden Triangle Tour',
        destination: 'Delhi - Agra - Jaipur',
        date: '2024-03-15',
        duration: '6 Days',
        price: '₹18,999',
        image: 'https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg',
        seatsLeft: 8,
        totalSeats: 20
      },
      {
        id: 2,
        name: 'Kerala Backwater Cruise',
        destination: 'Alleppey - Kumarakom',
        date: '2024-03-20',
        duration: '5 Days',
        price: '₹22,999',
        image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg',
        seatsLeft: 12,
        totalSeats: 16
      },
      {
        id: 3,
        name: 'Kashmir Valley Tour',
        destination: 'Srinagar - Gulmarg - Pahalgam',
        date: '2024-04-05',
        duration: '7 Days',
        price: '₹28,999',
        image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg',
        seatsLeft: 6,
        totalSeats: 15
      },
      {
        id: 4,
        name: 'Rajasthan Heritage Tour',
        destination: 'Jaipur - Udaipur - Jodhpur',
        date: '2024-04-12',
        duration: '8 Days',
        price: '₹32,999',
        image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
        seatsLeft: 10,
        totalSeats: 18
      },
      {
        id: 5,
        name: 'Goa Beach Festival',
        destination: 'North & South Goa',
        date: '2024-04-18',
        duration: '4 Days',
        price: '₹15,999',
        image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
        seatsLeft: 15,
        totalSeats: 25
      },
      {
        id: 6,
        name: 'Ladakh Adventure',
        destination: 'Leh - Nubra - Pangong',
        date: '2024-05-01',
        duration: '10 Days',
        price: '₹45,999',
        image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg',
        seatsLeft: 8,
        totalSeats: 12
      }
    ]
  },

  // Blog posts
  blog: [
    {
      id: 1,
      title: 'Best Time to Visit Rajasthan: A Complete Guide',
      excerpt: 'Discover the perfect time to explore the royal state of Rajasthan with our comprehensive guide covering weather, festivals, and travel tips.',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
      category: 'Travel Tips',
      author: 'Priya Sharma',
      date: '2024-02-15',
      readTime: '5 min read',
      content: `Rajasthan, the land of kings, is a mesmerizing destination that offers a perfect blend of history, culture, and natural beauty. However, timing your visit is crucial for the best experience. The ideal time to visit Rajasthan is during the winter months from October to March when the weather is pleasant and perfect for sightseeing. During this period, temperatures range from 10°C to 25°C, making it comfortable for exploring the magnificent forts, palaces, and desert landscapes. The peak tourist season is from December to February when the weather is at its best, but this also means higher prices and crowded attractions. If you're looking for a more budget-friendly option, consider visiting during the shoulder months of October-November or March, when the weather is still pleasant but prices are lower.`
    },
    {
      id: 2,
      title: 'Kerala Backwaters: A Paradise on Earth',
      excerpt: 'Experience the serene beauty of Kerala\'s backwaters with our insider guide to the best routes, houseboats, and hidden gems.',
      image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg',
      category: 'Destinations',
      author: 'Arjun Patel',
      date: '2024-02-10',
      readTime: '7 min read',
      content: `The backwaters of Kerala are a unique ecosystem of rivers, lakes, and canals that offer an unparalleled travel experience. These tranquil waterways, lined with coconut palms and traditional villages, provide a glimpse into the authentic rural life of Kerala. The best way to explore the backwaters is by staying on a traditional houseboat, locally known as 'kettuvallam'. These boats, once used for transporting rice and spices, have been converted into floating hotels complete with modern amenities. The most popular backwater destinations include Alleppey, Kumarakom, and Kollam, each offering its own unique charm and experiences.`
    },
    {
      id: 3,
      title: '10 Essential Travel Tips for First-Time India Visitors',
      excerpt: 'Everything you need to know before traveling to India, from cultural etiquette to practical advice for a smooth journey.',
      image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
      category: 'Travel Tips',
      author: 'Vikram Singh',
      date: '2024-02-05',
      readTime: '8 min read',
      content: `India is an incredible destination that can overwhelm first-time visitors. Here are essential tips to help you navigate this diverse country successfully. First, always carry a valid passport with at least 6 months validity and ensure you have the proper visa. Health-wise, get travel insurance and necessary vaccinations. When it comes to food and water, stick to bottled water and eat at reputable restaurants initially. Respect local customs by dressing modestly, especially when visiting religious sites. Learn basic Hindi phrases and always bargain respectfully in markets. Most importantly, keep an open mind and be prepared for an incredible adventure that will change your perspective on life.`
    },
    {
      id: 4,
      title: 'Ladakh: The Ultimate Adventure Guide',
      excerpt: 'Plan your perfect Ladakh adventure with our comprehensive guide covering trekking routes, permits, and best practices.',
      image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg',
      category: 'Adventure',
      author: 'Meera Joshi',
      date: '2024-01-30',
      readTime: '10 min read',
      content: `Ladakh, known as the "Land of High Passes," offers some of the most spectacular landscapes and adventure opportunities in India. This high-altitude desert region is perfect for trekking, motorcycle tours, and cultural exploration. The best time to visit is from May to September when the roads are accessible. Popular treks include the Markha Valley trek, Chadar trek (frozen river walk), and the Stok Kangri climb. Remember that Ladakh is at high altitude (3,500m+), so acclimatization is crucial. Spend at least 2-3 days in Leh before attempting any strenuous activities. Don't forget to obtain inner line permits for certain areas like Nubra Valley and Pangong Tso.`
    }
  ],

  // Travel tips content
  travelTips: {
    dos: [
      'Carry a valid passport with at least 6 months validity',
      'Get travel insurance for medical emergencies',
      'Respect local customs and dress modestly',
      'Drink bottled or boiled water',
      'Try local cuisine but start slowly',
      'Bargain respectfully in local markets',
      'Keep copies of important documents',
      'Learn basic Hindi phrases',
      'Tip service staff appropriately (10-15%)',
      'Use registered tour operators only'
    ],
    donts: [
      'Don\'t drink tap water in most areas',
      'Don\'t eat street food initially',
      'Don\'t wear revealing clothes at religious sites',
      'Don\'t photograph people without permission',
      'Don\'t touch anyone\'s head or point feet at people',
      'Don\'t use left hand for eating or greeting',
      'Don\'t ignore local customs and traditions',
      'Don\'t travel without proper research',
      'Don\'t carry large amounts of cash',
      'Don\'t ignore safety warnings'
    ],
    safetyFeatures: [
      {
        icon: 'Shield',
        title: 'Comprehensive Travel Insurance',
        description: 'All our tours include travel insurance covering medical emergencies, trip cancellation, and lost baggage.'
      },
      {
        icon: 'Phone',
        title: '24/7 Emergency Helpline',
        description: 'Round-the-clock support with local emergency numbers and direct contact with our team.'
      },
      {
        icon: 'Users',
        title: 'Experienced Local Guides',
        description: 'Professional guides with extensive local knowledge and emergency response training.'
      },
      {
        icon: 'MapPin',
        title: 'GPS Tracking & Communication',
        description: 'All our vehicles are GPS-enabled with satellite communication for remote areas.'
      }
    ]
  }
};