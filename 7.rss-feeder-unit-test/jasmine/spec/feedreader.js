/* Test inside $ to hold off tests until the DOM is ready. */

$(function() {
    /* First suite to test if the preset RSS feeds are meeting expectations */
    describe('RSS Feeds', function() {
        //checks to see if all the feeds are defined and not empty ""
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //checks to see if the feeds contain a defined and non-empty string
        it('have a url', function() {
            for(var i=0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).toBeGreaterThan(0);
            }
        });

        //checks to see if the feeds have a valid name (will show in menu)
        it('have a name', function() {
            for(var i=0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).toBeGreaterThan(0);
            }
        });
    });


    /* Suite to test the menu animations. */
    describe('The menu', function() {

        //checks to see if the menu is hidden when the page is first rendered
        it('is hidden by default', function() {
            expect(document.body.classList).toContain("menu-hidden");
        });

        //checks to see if clicking the menu icon the first time opens the menu and second time closes the menu
        it('changes visibility when the menu icon is clicked', function() {
            var menuIcon = $('.menu-icon-link');
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBeFalsy();
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

    });

    /* This suite tests the initial entries rendered to the page for a proper default view */

    describe('Initial Entries', function() {

        //before the test, calls the loadfeed function with done as the callback to account for async
        beforeEach(function(done) {
            loadFeed(0,done);
        });
        //this checks to see if there are more than 0 entries initially rendered to the page.
        it('should be greater than 0 entries after the loadFeed function is called & completed', function(){
            var count = 0;
            expect($('.feed .entry').length).toBeGreaterThan(count);
        });

    });

    /* This suite tests if selecting a new feed from the menu has the correct functionality */
    describe('New Feed Selection', function() {

        var currentFeed = '';
        var newFeed = '';

        //before the test, one feed is selected which calls back another select feed that calls back done.
        beforeEach(function(done) {
            loadFeed(1, function() {
                currentFeed = $('.feed .entry').contents().filter('h2').html();
                loadFeed(0,done);
            });
        });
        //this checks to see if the first load feed function led to a different entry render than the second load feed function
        it('should change the content of the feed container.', function() {
            newFeed = $('.feed .entry').contents().filter('h2').html();
            console.log(newFeed);
            console.log(currentFeed);
            expect(newFeed).not.toEqual(currentFeed);
        });
    });

}());
