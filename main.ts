
// Youtube Video Class
console.log("----------Youtube Video----------");

class User {

    constructor (
        private id: number,
        private name: string
    ) {}

    getId(): number { return this.id; }
    getName(): string { return this.name; }

}

class Channel {

    constructor (
        private id: number,
        private name: string,
        private subscribers: User[] = [],
        private views: number = 0
    ) {}

    getId(): number { return this.id; }
    getName(): string { return this.name; }
    getSubscribersCount(): number { return this.subscribers.length; }
    getSubscribers(): User[] { return this.subscribers; }
    getViews(): number { return this.views; }
    
    addSubscriber(user: User): void { this.subscribers.push(user); }
    addView(): void { this.views += 1; }

}

class VideoComment {

    constructor (
        private user: User,
        private video: YoutubeVideo,
        private body: string,
        private postedOn: Date,
        private likes: number = 0,
        private dislikes: number = 0,
        private replies: VideoComment[] = []
    ) {}

    getUser(): User { return this.user; }
    getBody(): string { return this.body; }
    getPostedOn(): Date { return this.postedOn; }
    getLikes(): number { return this.likes; }
    getDislikes(): number { return this.dislikes; }
    getReplies(): VideoComment[] { return this.replies; }

    addLike(): void { this.likes += 1; }
    addDislike(): void { this.dislikes += 1; }
    addReply(reply: VideoComment): void { this.replies.push(reply); }

}

class YoutubeVideo {

    constructor (
        private title: string,
        private description: string,
        private category: string,
        private src: string,
        private publishedOn: Date,
        private channel: Channel,
        private likes: number,
        private dislikes: number,
        private views: number = 0,
        private comments: VideoComment[] = []
    ) {}

    getTitle(): string { return this.title; }
    getDescription(): string { return this.description; }
    getCategory(): string { return this.category; }
    getSrc(): string { return this.src; }
    getPublishedOn(): Date { return this.publishedOn; }
    getChannel(): Channel { return this.channel; }
    getLikes(): number { return this.likes; }
    getDislikes(): number { return this.dislikes; }
    getViews(): number { return this.views; }
    getComments(startIndex?: number, length?: number): VideoComment[] | VideoComment {
        if (startIndex === undefined) return this.comments;
        else if (length === undefined) return this.comments[startIndex];
        else return this.comments.slice(startIndex, startIndex + length);
    }
    getRelatedVideos(): YoutubeVideo[] | void {
        console.log("Show all the videos that the same channel and category as this video")
    }

    addLike(): void { this.likes += 1; }
    addDislike(): void { this.dislikes += 1; }
    addView(): void { this.views += 1; }
    addComment(comment: VideoComment): void { this.comments.push(comment); }

    toString(): string { return this.title; }

}

let video1: YoutubeVideo = new YoutubeVideo(
    "TypeScript: A Love Tale With JavaScript",
    "Some Description",
    "Science and Technology",
    "file/path/to/video",
    new Date("Apr 20, 2018 12:45:31"),
    new Channel(1, "Coding Tech"),
    196,
    6,
    7264
);

video1.addComment(new VideoComment(new User(1, "Anish"), video1, "Great Video", new Date("May 05, 2018")));

console.log(video1);
video1.addView();
console.log(video1.getTitle(), video1.getViews(), video1.getComments());


// Social Profile Class
console.log("----------Social Profile----------");

class Relationship {

    constructor (
        private relative: SocialProfile,
        private relation: string
    ) {}

    getRelative(): SocialProfile { return this.relative; }
    getRelation(): string { return this.relation; }

}

class SocialProfile {

    private contact: string | undefined;
    private hometown: string | undefined;
    private college: string | undefined;
    private school: string | undefined;
    private languages: string[] = [];
    private relationships: Relationship[] = [];
    private about: string | undefined;
    private favouriteQuotes: string[] = [];
    private friends: SocialProfile[] = [];

    constructor (
        private id: number,
        private name: string,
        private gender: string,
        private email: string,
        private dateOfBirth: Date,
    ) {}

    getName(): string { return this.name; }
    getGender(): string { return this.gender; }
    getEmail(): string { return this.email; }
    getDateOfBirth(): Date { return this.dateOfBirth; }
    getAge(): number {
        var diff =(new Date().getTime() - this.dateOfBirth.getTime()) / 1000;
        diff /= (60 * 60 * 24);
        return Math.abs(Math.round(diff/365.25));
    }
    getContact(): string { return this.contact === undefined ? "" : this.contact; }
    getHometown(): string { return this.hometown === undefined ? "" : this.hometown; }
    getCollege(): string { return this.college === undefined ? "" : this.college; }
    getSchool(): string { return this.school === undefined ? "" : this.school; }
    getLanguages(): string[] { return this.languages; }
    getRelationships(): Relationship[] { return this.relationships; }
    getAbout(): string { return this.about === undefined ? "" : this.about; }
    getFavQuotes(): string[] { return this.favouriteQuotes; }
    getFriends(): SocialProfile[] { return this.friends; }

    setContact(contact: string): void { this.contact = contact; }
    setHometown(hometown: string): void { this.hometown = hometown; }
    setCollege(college: string): void { this.college = college; }
    setSchool(school: string): void { this.school = school; }
    addLanguages(...languages: string[]): void {
        for (let language of languages) {
            if (this.languages.indexOf(language) === -1)
                this.languages.push(language);
        }
    }
    addRelationship(relationship: Relationship): void {
        for (let x of this.relationships) {
            if (x.getRelative() === relationship.getRelative()) {
                console.log("Relative already exists.");
                return;
            }
        }
        this.relationships.push(relationship);
    }
    setAbout(about: string): void { this.about = about; }
    addFavQuotes(...quotes: string[]): void { this.favouriteQuotes.concat(quotes); }
    addFriend(user: SocialProfile): void {
        if (this === user) return;
        if (this.friends.filter(friend => friend === user).length !== 0) {
            console.log(`${this.name} is already friends with ${user.name}.`);
        } else {
            this.friends.push(user);
            user.friends.push(this);
            console.log(`${this.name} and ${user.name} are now friends.`);
        }
    }

    searchFriends(name: string): SocialProfile[] {
        return this.friends.filter(user => user.name === name);
    }
    relationshipWith(name: string): string {
        for (let relationship of this.relationships) {
            if (relationship.getRelative().name === name) return relationship.getRelation();
        }
        return "";
    }
    getFriendsWithSameSchool(): SocialProfile[] {
        return this.friends.filter(friend => friend.school === this.school);
    }
    getFriendsWithSameCollege(): SocialProfile[] {
        return this.friends.filter(friend => friend.college === this.college);
    }

}

let user1 = new SocialProfile(
    1,
    "Anish Ghosh",
    "Male",
    "anishghosh103@gmail.com",
    new Date(1997, 3, 10)
);
user1.setCollege("Scottish Church College");

let user2 = new SocialProfile(
    2,
    "Subhas Sen",
    "Male",
    "xyz@abc.org",
    new Date(1996, 4, 5)
);
user2.setCollege("Scottish Church College");

let user3 = new SocialProfile(
    3,
    "Victor Ghosh",
    "Male",
    "somemail@gmail.com",
    new Date(1982, 9, 11)
);

user1.addFriend(user2);
user1.addFriend(user3);
user1.addRelationship(new Relationship(user3, "Brother"));

user3.addFriend(user1);

console.log(`Relationships of ${user1.getName()}:`);
console.log(
    user1.getRelationships().map(relationship => {
        return `(${relationship.getRelative().getName()}, ${relationship.getRelation()})`;
    }).join(", ")
);

console.log(`Friends of ${user1.getName()}:`);
console.log(
    user1.getFriends().map(friend => friend.getName()).join(", ")
);

console.log(`${user1.getName()}'s age: ${user1.getAge()}`);
console.log(`${user2.getName()}'s age: ${user2.getAge()}`);
console.log(`${user3.getName()}'s age: ${user3.getAge()}`);