module.exports = function (app, passport) {

    app.get('/', function (req, res) {
        res.render('index.ejs');
    });

    app.get('/login', function (req, res) {
        res.render('login.ejs', {message: req.flash('loginMessage')});
    });

    //app.post('/login', );

    app.get('/signup', function (req, res) {
        res.render('signup.ejs', {message :req.flash('signupMessage')});
    });

    //app.post('/signup', );

    app.get('/profile', isloggedIn, function (req, res) {
        res.render('profile.ejs', {
            user : req.user
        });
    });

    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    function isloggedIn(req, res, next) {
        if(req.isAuthenticated()){
            return next();
        }
        else{
            res.redirect('/');
        }
    }

}