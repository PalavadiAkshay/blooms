/* GET 'about us' page */
module.exports.about = function(req, res) {
    res.render('generic-text', {
        title: 'About blooms',
        content: 'blooms was created to help people find self drive car rentals.'
    });
  };
