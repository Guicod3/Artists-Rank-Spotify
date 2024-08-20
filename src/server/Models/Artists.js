export class Artists {
    constructor(id, name, followers, genres, popular, images){
        this.id = id
        this.name = name
        this.followers = followers
        this.genres = genres
        this.popular = popular
        this.images = images
        this.description = null
    }

    addDescription(text){
        this.description = text
    }
}