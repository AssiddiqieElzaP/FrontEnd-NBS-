import md5 from './md5'

const gravatar = (email) => `//www.gravatar.com/avatar/${md5(email.trim().toLowerCase())}?s=300`

export default gravatar
