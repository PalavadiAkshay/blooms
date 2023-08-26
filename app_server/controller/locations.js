/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'Blooms - Find self drive car rentals near you',
        pageHeader: {
            title: 'Blooms',
            strapline: 'Find self drive car rentals near you!'
        },
        sidebar: "Plan your journeys with self-drive car rentals and enjoy the freedom of going anywhere anytime.",
        locations: [{
            name: 'Zoom car',
            address: '11-5-422/C/B, Lakdikapul',
            rating: 4,
            facilities: ['12 hours', '24 hours', '48 hours'],
            distance: '1.0 km from Birla Mandir',
            href: '/location'
        }, {
            name: 'Longdrive cars',
            address: 'Plot 237, Road 36, Jubilee Hills',
            rating: 4,
            facilities: ['12 hours', '24 hours', '48 hours'],
            distance: '2.5 km from Golconda Fort',
            href: '/location/2'
        }, {
            name: 'IndusGo',
            address: 'House 418, 8/2/287/12, Road 14, Banjara Hills',
            rating: 3,
            facilities: ['12 hours', '24 hours', '48 hours'],
            distance: '2.4 km from Golconda Fort',
            href: '/location/3'
        }]
    });
  };
  
  /* GET 'Location info' page */
  module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'Zoom car',
        pageHeader: {
            title: 'Zoom car'
        },
        sidebar: {
            context: 'is on Blooms because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Zoom car',
            address: '11-5-422/C/B, Lakdikapul',
            rating: 4,
            facilities: ['12 hours', '24 hours', '48 hours'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay. cars wasn\'t great, but the wifi was fast.'
            }]
        }
    });
  };

    /* GET 'Location info' page */
    module.exports.locationInfo2 = function(req, res) {
        res.render('location-info2', {
            title: 'Longdrive cars',
            pageHeader: {
                title: 'Longdrive cars'
            },
            sidebar: {
                context: 'is on Blooms because it has accessible cars at afforadable prices.',
                callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
            },
            location: {
                name: 'Longdrive cars',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 3,
                facilities: ['12 hours', '24 hours', '48 hours'],
                coords: {
                    lat: 51.455041,
                    lng: -0.9690884
                },
                openingTimes: [{
                    days: 'Monday - Friday',
                    opening: '7:00am',
                    closing: '7:00pm',
                    closed: false
                }, {
                    days: 'Saturday',
                    opening: '8:00am',
                    closing: '5:00pm',
                    closed: false
                }, {
                    days: 'Sunday',
                    closed: true
                }],
                reviews: [{
                    author: 'Simon Holmes',
                    rating: 5,
                    timestamp: '16 July 2013',
                    reviewText: 'What a great place. I can\'t say enough good things about it.'
                }, {
                    author: 'Charlie Chaplin',
                    rating: 3,
                    timestamp: '16 June 2013',
                    reviewText: 'It was okay. cars wasn\'t great, but the wifi was fast.'
                }]
            }
        });
      };

        /* GET 'Location info' page */
  module.exports.locationInfo3 = function(req, res) {
    res.render('location-info3', {
        title: 'IndusGo',
        pageHeader: {
            title: 'IndusGo'
        },
        sidebar: {
            context: 'is on Blooms because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'IndusGo',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['12 hours', '24 hours', '48 hours'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay. cars wasn\'t great, but the wifi was fast.'
            }]
        }
    });
  };

  /* GET 'Add review' page */
  module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Zoom car on Blooms',
        pageHeader: {
            title: 'Review Zoom car'
        }
    });
  };
  
  /* GET 'Add review' page */
  module.exports.addReview2 = function(req, res) {
    res.render('location-review-form2', {
        title: 'Review Longdrive cars on Blooms',
        pageHeader: {
            title: 'Review Longdrive cars'
        }
    });
  };

  /* GET 'Add review' page */
  module.exports.addReview3 = function(req, res) {
    res.render('location-review-form3', {
        title: 'Review IndusGo on Blooms',
        pageHeader: {
            title: 'Review IndusGo'
        }
    });
  };
