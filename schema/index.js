const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInt, GraphQLList } = require('graphql');
const { Task } = require('../models');



// Define the TaskType
const TaskType = new GraphQLObjectType({
    name: 'Task',
    fields: {
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
    },
});


// Queries
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        tasks: {
            type: new GraphQLList(TaskType),
            resolve(parent, args) {
                return Task.findAll();
            },
        },
        task: {
            type: TaskType,
            args: { id: { type: GraphQLInt } },
            resolve(parent, args) {
                return Task.findByPk(args.id);
            },
        },
    },
});

// Mutations
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createTask: {
            type: TaskType,
            args: {
                title: { type: GraphQLString },
                description: { type: GraphQLString },
            },
            resolve(parent, args) {
                return Task.create({ title: args.title, description: args.description });
            },
        },
        updateTask: {
            type: TaskType,
            args: {
                id: { type: GraphQLInt },
                title: { type: GraphQLString },
                description: { type: GraphQLString },
            },
            resolve(parent, args) {
                return Task.update({ title: args.title, description: args.description }, { where: { id: args.id } });
            },
        },
        deleteTask: {
            type: TaskType,
            args: { id: { type: GraphQLInt } },
            resolve(parent, args) {
                return Task.destroy({ where: { id: args.id } });
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});
