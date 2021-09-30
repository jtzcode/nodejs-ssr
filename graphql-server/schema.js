const { graphql, buildSchema } = require('graphql');

const mockData = require('./mock-database');

const schema = buildSchema(`
    type Comment {
        id: Int
        avatar: String
        name: String
        isTop: Boolean
        content: String
        publishDate: String
        commentNum: Int
        praiseNum: Int
    }
    type Query {
        comment: [Comment]
    }

    type Mutation {
        praise(id: Int): Int
    }
`)

schema.getQueryType().getFields().comment.resolve = () => {
    return Object.keys(mockData).map(key => {
        return mockData[key];
    });
}

schema.getMutationType().getFields().praise.resolve = (args0, {id}) => {
    mockData[id].praiseNum++;
    return mockData[id].praiseNum; 
}

module.exports = schema;