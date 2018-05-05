// Youtube Video Class
console.log("----------Youtube Video----------");
var User = /** @class */ (function () {
    function User(id, name) {
        this.id = id;
        this.name = name;
    }
    User.prototype.getId = function () { return this.id; };
    User.prototype.getName = function () { return this.name; };
    return User;
}());
var Channel = /** @class */ (function () {
    function Channel(id, name, subscribers, views) {
        if (subscribers === void 0) { subscribers = []; }
        if (views === void 0) { views = 0; }
        this.id = id;
        this.name = name;
        this.subscribers = subscribers;
        this.views = views;
    }
    Channel.prototype.getId = function () { return this.id; };
    Channel.prototype.getName = function () { return this.name; };
    Channel.prototype.getSubscribersCount = function () { return this.subscribers.length; };
    Channel.prototype.getSubscribers = function () { return this.subscribers; };
    Channel.prototype.getViews = function () { return this.views; };
    Channel.prototype.addSubscriber = function (user) { this.subscribers.push(user); };
    Channel.prototype.addView = function () { this.views += 1; };
    return Channel;
}());
var VideoComment = /** @class */ (function () {
    function VideoComment(user, video, body, postedOn, likes, dislikes, replies) {
        if (likes === void 0) { likes = 0; }
        if (dislikes === void 0) { dislikes = 0; }
        if (replies === void 0) { replies = []; }
        this.user = user;
        this.video = video;
        this.body = body;
        this.postedOn = postedOn;
        this.likes = likes;
        this.dislikes = dislikes;
        this.replies = replies;
    }
    VideoComment.prototype.getUser = function () { return this.user; };
    VideoComment.prototype.getBody = function () { return this.body; };
    VideoComment.prototype.getPostedOn = function () { return this.postedOn; };
    VideoComment.prototype.getLikes = function () { return this.likes; };
    VideoComment.prototype.getDislikes = function () { return this.dislikes; };
    VideoComment.prototype.getReplies = function () { return this.replies; };
    VideoComment.prototype.addLike = function () { this.likes += 1; };
    VideoComment.prototype.addDislike = function () { this.dislikes += 1; };
    VideoComment.prototype.addReply = function (reply) { this.replies.push(reply); };
    return VideoComment;
}());
var YoutubeVideo = /** @class */ (function () {
    function YoutubeVideo(title, description, category, src, publishedOn, channel, likes, dislikes, views, comments) {
        if (views === void 0) { views = 0; }
        if (comments === void 0) { comments = []; }
        this.title = title;
        this.description = description;
        this.category = category;
        this.src = src;
        this.publishedOn = publishedOn;
        this.channel = channel;
        this.likes = likes;
        this.dislikes = dislikes;
        this.views = views;
        this.comments = comments;
    }
    YoutubeVideo.prototype.getTitle = function () { return this.title; };
    YoutubeVideo.prototype.getDescription = function () { return this.description; };
    YoutubeVideo.prototype.getCategory = function () { return this.category; };
    YoutubeVideo.prototype.getSrc = function () { return this.src; };
    YoutubeVideo.prototype.getPublishedOn = function () { return this.publishedOn; };
    YoutubeVideo.prototype.getChannel = function () { return this.channel; };
    YoutubeVideo.prototype.getLikes = function () { return this.likes; };
    YoutubeVideo.prototype.getDislikes = function () { return this.dislikes; };
    YoutubeVideo.prototype.getViews = function () { return this.views; };
    YoutubeVideo.prototype.getComments = function (startIndex, length) {
        if (startIndex === undefined)
            return this.comments;
        else if (length === undefined)
            return this.comments[startIndex];
        else
            return this.comments.slice(startIndex, startIndex + length);
    };
    YoutubeVideo.prototype.getRelatedVideos = function () {
        console.log("Show all the videos that the same channel and category as this video");
    };
    YoutubeVideo.prototype.addLike = function () { this.likes += 1; };
    YoutubeVideo.prototype.addDislike = function () { this.dislikes += 1; };
    YoutubeVideo.prototype.addView = function () { this.views += 1; };
    YoutubeVideo.prototype.addComment = function (comment) { this.comments.push(comment); };
    YoutubeVideo.prototype.toString = function () { return this.title; };
    return YoutubeVideo;
}());
var video1 = new YoutubeVideo("TypeScript: A Love Tale With JavaScript", "Some Description", "Science and Technology", "file/path/to/video", new Date("Apr 20, 2018 12:45:31"), new Channel(1, "Coding Tech"), 196, 6, 7264);
video1.addComment(new VideoComment(new User(1, "Anish"), video1, "Great Video", new Date("May 05, 2018")));
console.log(video1);
video1.addView();
console.log(video1.getTitle(), video1.getViews(), video1.getComments());
// Social Profile Class
console.log("----------Social Profile----------");
var Relationship = /** @class */ (function () {
    function Relationship(relative, relation) {
        this.relative = relative;
        this.relation = relation;
    }
    Relationship.prototype.getRelative = function () { return this.relative; };
    Relationship.prototype.getRelation = function () { return this.relation; };
    return Relationship;
}());
var SocialProfile = /** @class */ (function () {
    function SocialProfile(id, name, gender, email, dateOfBirth) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.languages = [];
        this.relationships = [];
        this.favouriteQuotes = [];
        this.friends = [];
    }
    SocialProfile.prototype.getName = function () { return this.name; };
    SocialProfile.prototype.getGender = function () { return this.gender; };
    SocialProfile.prototype.getEmail = function () { return this.email; };
    SocialProfile.prototype.getDateOfBirth = function () { return this.dateOfBirth; };
    SocialProfile.prototype.getAge = function () {
        var diff = (new Date().getTime() - this.dateOfBirth.getTime()) / 1000;
        diff /= (60 * 60 * 24);
        return Math.abs(Math.round(diff / 365.25));
    };
    SocialProfile.prototype.getContact = function () { return this.contact === undefined ? "" : this.contact; };
    SocialProfile.prototype.getHometown = function () { return this.hometown === undefined ? "" : this.hometown; };
    SocialProfile.prototype.getCollege = function () { return this.college === undefined ? "" : this.college; };
    SocialProfile.prototype.getSchool = function () { return this.school === undefined ? "" : this.school; };
    SocialProfile.prototype.getLanguages = function () { return this.languages; };
    SocialProfile.prototype.getRelationships = function () { return this.relationships; };
    SocialProfile.prototype.getAbout = function () { return this.about === undefined ? "" : this.about; };
    SocialProfile.prototype.getFavQuotes = function () { return this.favouriteQuotes; };
    SocialProfile.prototype.getFriends = function () { return this.friends; };
    SocialProfile.prototype.setContact = function (contact) { this.contact = contact; };
    SocialProfile.prototype.setHometown = function (hometown) { this.hometown = hometown; };
    SocialProfile.prototype.setCollege = function (college) { this.college = college; };
    SocialProfile.prototype.setSchool = function (school) { this.school = school; };
    SocialProfile.prototype.addLanguages = function () {
        var languages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            languages[_i] = arguments[_i];
        }
        for (var _a = 0, languages_1 = languages; _a < languages_1.length; _a++) {
            var language = languages_1[_a];
            if (this.languages.indexOf(language) === -1)
                this.languages.push(language);
        }
    };
    SocialProfile.prototype.addRelationship = function (relationship) {
        for (var _i = 0, _a = this.relationships; _i < _a.length; _i++) {
            var x = _a[_i];
            if (x.getRelative() === relationship.getRelative()) {
                console.log("Relative already exists.");
                return;
            }
        }
        this.relationships.push(relationship);
    };
    SocialProfile.prototype.setAbout = function (about) { this.about = about; };
    SocialProfile.prototype.addFavQuotes = function () {
        var quotes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            quotes[_i] = arguments[_i];
        }
        this.favouriteQuotes.concat(quotes);
    };
    SocialProfile.prototype.addFriend = function (user) {
        if (this === user)
            return;
        if (this.friends.filter(function (friend) { return friend === user; }).length !== 0) {
            console.log(this.name + " is already friends with " + user.name + ".");
        }
        else {
            this.friends.push(user);
            user.friends.push(this);
            console.log(this.name + " and " + user.name + " are now friends.");
        }
    };
    SocialProfile.prototype.searchFriends = function (name) {
        return this.friends.filter(function (user) { return user.name === name; });
    };
    SocialProfile.prototype.relationshipWith = function (name) {
        for (var _i = 0, _a = this.relationships; _i < _a.length; _i++) {
            var relationship = _a[_i];
            if (relationship.getRelative().name === name)
                return relationship.getRelation();
        }
        return "";
    };
    SocialProfile.prototype.getFriendsWithSameSchool = function () {
        var _this = this;
        return this.friends.filter(function (friend) { return friend.school === _this.school; });
    };
    SocialProfile.prototype.getFriendsWithSameCollege = function () {
        var _this = this;
        return this.friends.filter(function (friend) { return friend.college === _this.college; });
    };
    return SocialProfile;
}());
var user1 = new SocialProfile(1, "Anish Ghosh", "Male", "anishghosh103@gmail.com", new Date(1997, 3, 10));
user1.setCollege("Scottish Church College");
var user2 = new SocialProfile(2, "Subhas Sen", "Male", "xyz@abc.org", new Date(1996, 4, 5));
user2.setCollege("Scottish Church College");
var user3 = new SocialProfile(3, "Victor Ghosh", "Male", "somemail@gmail.com", new Date(1982, 9, 11));
user1.addFriend(user2);
user1.addFriend(user3);
user1.addRelationship(new Relationship(user3, "Brother"));
user3.addFriend(user1);
console.log("Relationships of " + user1.getName() + ":");
console.log(user1.getRelationships().map(function (relationship) {
    return "(" + relationship.getRelative().getName() + ", " + relationship.getRelation() + ")";
}).join(", "));
console.log("Friends of " + user1.getName() + ":");
console.log(user1.getFriends().map(function (friend) { return friend.getName(); }).join(", "));
console.log(user1.getName() + "'s age: " + user1.getAge());
console.log(user2.getName() + "'s age: " + user2.getAge());
console.log(user3.getName() + "'s age: " + user3.getAge());
