class Artists {
    constructor(id, name, followers, genres, popular, images){
        this.id = id
        this.name = name
        this.followers = followers
        this.genres = genres
        this.popular = popular
        this.images = images
    }

    addDescription(text){
        this.description = text
    }
}

module.exports = Artists;