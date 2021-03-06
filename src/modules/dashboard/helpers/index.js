export const menuSections = [
    {
        header: 'General',
        subtypes: [
        {
            title: 'Inicio',
            link: '/'
        },
        {
            title: 'Blog',
            link: '/blog'
        },
        {
            title: 'Social',
            link: '/social'
        }]
    },
    {
        header: 'Posts',
        subtypes: [{
            title: 'All Posts',
            link: '/dashboard'
        },{
            title: 'New',
            link: '/dashboard/posts/new'
        }],
    },
    {
        header: 'Media',
        subtypes: [ {
            title: 'All Images',
            link: '/dashboard/images'
        },{
            title: 'Upload',
            link: '/dashboard/images/new'
        }],
    },
    {
        header: 'Authors',
        subtypes: [ {
            title: 'All Authors',
            link: '/dashboard/authors'
        },{
            title: 'New',
            link: '/dashboard/authors/new'
        }],
    },
    {
        header: 'Users',
        subtypes: [{
            title: 'All Users',
            link: '/dashboard/users'
        },{
            title: 'New',
            link: '/dashboard/users/new'
        }],
    },
    {
        header: 'Actions',
        subtypes: [ {
            title: 'Log Out',
            link: '/moreno/acces/logout' 
        }],
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

export const validateImageForm = params => {
    let formData = new FormData(); 
    formData.append('title', params.title);
    formData.append('source', params.source);
    formData.append('upload', params.upload);
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

export const createCredentials = params => {
    const data = {
        username: params.username,
        password: params.password
    }
    return data;
}