export const populate = posts => {
    const images = [];
    const { docs, page, pages, limit } = posts.data;
    let nextPage = page + 1;
    docs.forEach(post => images.push(post.image) );            
    return { images, docs, page, pages, limit, nextPage }
}