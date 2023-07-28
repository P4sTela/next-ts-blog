// repository_name はそれぞれの値に置き換える
module.exports = {
    output: 'export',
    basePath: process.env.GITHUB_ACTIONS && "/next-ts-blog",
    trailingSlash: true,
};