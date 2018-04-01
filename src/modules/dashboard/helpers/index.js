export const menuSections = [
    {
        header: 'General',
        subtypes: ['Inicio','Blog','Social']
    },
    {
        header: 'Posts',
        subtypes: ['All Posts','New','Edit']
    },
    {
        header: 'Media',
        subtypes: ['Images','Upload']
    },
    {
        header: 'Authors',
        subtypes: ['All Authors','New','Edit','Remove']
    },
    {
        header: 'Users',
        subtypes: ['All Users','New','Edit','Remove']
    },
    {
        header: 'Actions',
        subtypes: ['Log out']
    }
];

export const topics = ['Tech', 'Business', 'Travel', 'Thoughs']

export const validateForm = state => {
    if(state.author.length < 1) return false
    if(state.title.length < 1) return false
    if(state.content.length < 1) return false
    if(state.image.length < 1) return false
    if(state.subject.length < 1) return false
    return true
}

//this could works
export const experimentFunction = params => {
    let formData = new FormData();
    for(var param in params){
        formData.append(param, params[param])
    }
    return formData;
}

export const createForm = params => {
    const data = {
        title: params.title,
        content: params.content,
        image: params.image,
        author: params.author,
        subject: params.subject
    }
    
    return data;
}