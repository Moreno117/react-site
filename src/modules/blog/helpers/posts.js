export const populate = posts => {
    const images = [];
    const { docs } = posts.data;
    docs.forEach(post => images.push(post.image) );            
    return { images, docs }
}