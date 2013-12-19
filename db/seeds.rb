# encoding: utf-8
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup').
#
# Examples:
#
#   cities = City.create([{name: ''Chicago' }', '{name: ''Copenhagen' }]')
#   Mayor.create(name: ''Emanuel'', 'city: 'cities.first')
Post.create(user_id: 3, division_id: 2, name: 'заведующий кафедрой', post_type_id: 2)
Post.create(user_id: 4, division_id: 2, name: 'профессор', post_type_id: 2, parent_id: 3)
Post.create(user_id: 5, division_id: 2, name: 'доцент', post_type_id: 2, parent_id: 3)
Post.create(user_id: 6, division_id: 2, name: 'доцент', post_type_id: 2, parent_id: 3)
Post.create(user_id: 7, division_id: 2, name: 'доцент', post_type_id: 2, parent_id: 3)
Post.create(user_id: 8, division_id: 2, name: 'доцент', post_type_id: 2, parent_id: 3)
Post.create(user_id: 9, division_id: 2, name: 'доцент', post_type_id: 2, parent_id: 3)
Post.create(user_id: 10, division_id: 2, name: 'доцент', post_type_id: 2, parent_id: 3)
Post.create(user_id: 11, division_id: 2, name: 'старший преподаватель', post_type_id: 2, parent_id: 3)
Post.create(user_id: 12, division_id: 3, name: 'заведующий кафедрой', post_type_id: 2)
Post.create(user_id: 13, division_id: 3, name: 'доцент', post_type_id: 2, parent_id: 12)
Post.create(user_id: 14, division_id: 3, name: 'доцент', post_type_id: 2, parent_id: 12)
Post.create(user_id: 15, division_id: 3, name: 'доцент', post_type_id: 2, parent_id: 12)
Post.create(user_id: 16, division_id: 3, name: 'доцент', post_type_id: 2, parent_id: 12)
Post.create(user_id: 17, division_id: 3, name: 'старший преподаватель', post_type_id: 2, parent_id: 12)
Post.create(user_id: 18, division_id: 3, name: 'старший преподаватель', post_type_id: 2, parent_id: 12)
Post.create(user_id: 19, division_id: 3, name: 'старший преподаватель', post_type_id: 2, parent_id: 12)
Post.create(user_id: 20, division_id: 3, name: 'старший преподаватель', post_type_id: 2, parent_id: 12)
Post.create(user_id: 21, division_id: 3, name: 'старший преподаватель', post_type_id: 2, parent_id: 12)
Post.create(user_id: 22, division_id: 3, name: 'старший преподаватель', post_type_id: 2, parent_id: 12)
Post.create(user_id: 23, division_id: 3, name: 'ассистент', post_type_id: 2, parent_id: 12)
Post.create(user_id: 24, division_id: 3, name: 'ассистент', post_type_id: 2, parent_id: 12)
Post.create(user_id: 25, division_id: 4, name: 'заведующий кафедрой', post_type_id: 2)
Post.create(user_id: 26, division_id: 4, name: 'старший преподаватель', post_type_id: 2, parent_id: 25)
Post.create(user_id: 27, division_id: 4, name: 'старший преподаватель', post_type_id: 2, parent_id: 25)
Post.create(user_id: 28, division_id: 4, name: 'ассистент', post_type_id: 2, parent_id: 25)
Post.create(user_id: 29, division_id: 5, name: 'заведующий кафедрой', post_type_id: 2)
Post.create(user_id: 30, division_id: 5, name: 'профессор', post_type_id: 2, parent_id: 29)
Post.create(user_id: 31, division_id: 5, name: 'доцент', post_type_id: 2, parent_id: 29)
Post.create(user_id: 32, division_id: 5, name: 'старший преподаватель', post_type_id: 2, parent_id: 29)
Post.create(user_id: 33, division_id: 5, name: 'старший преподаватель', post_type_id: 2, parent_id: 29)
Post.create(user_id: 34, division_id: 5, name: 'преподаватель', post_type_id: 2, parent_id: 29)
Post.create(user_id: 35, division_id: 5, name: 'преподаватель', post_type_id: 2, parent_id: 29)
Post.create(user_id: 36, division_id: 5, name: 'преподаватель', post_type_id: 2, parent_id: 29)
Post.create(user_id: 37, division_id: 5, name: 'преподаватель', post_type_id: 2, parent_id: 29)
Post.create(user_id: 38, division_id: 6, name: 'заведующий кафедрой', post_type_id: 2)
Post.create(user_id: 39, division_id: 6, name: 'доцент', post_type_id: 2, parent_id: 38)
Post.create(user_id: 40, division_id: 6, name: 'доцент', post_type_id: 2, parent_id: 38)
Post.create(user_id: 41, division_id: 6, name: 'доцент', post_type_id: 2, parent_id: 38)
Post.create(user_id: 42, division_id: 6, name: 'старший преподаватель', post_type_id: 2, parent_id: 38)
Post.create(user_id: 43, division_id: 6, name: 'старший преподаватель', post_type_id: 2, parent_id: 38)
Post.create(user_id: 44, division_id: 7, name: 'заведующий кафедрой', post_type_id: 2)
Post.create(user_id: 45, division_id: 7, name: 'профессор', post_type_id: 2, parent_id: 44)
Post.create(user_id: 46, division_id: 7, name: 'доцент', post_type_id: 2, parent_id: 44)
Post.create(user_id: 47, division_id: 7, name: 'доцент', post_type_id: 2, parent_id: 44)
Post.create(user_id: 48, division_id: 7, name: 'доцент', post_type_id: 2, parent_id: 44)
Post.create(user_id: 49, division_id: 7, name: 'доцент', post_type_id: 2, parent_id: 44)
Post.create(user_id: 50, division_id: 7, name: 'доцент', post_type_id: 2, parent_id: 44)
Post.create(user_id: 51, division_id: 7, name: 'старший преподаватель', post_type_id: 2, parent_id: 44)
Post.create(user_id: 52, division_id: 8, name: 'заведующий кафедрой', post_type_id: 2)
Post.create(user_id: 53, division_id: 8, name: 'доцент', post_type_id: 2, parent_id: 52)
Post.create(user_id: 54, division_id: 8, name: 'доцент', post_type_id: 2, parent_id: 52)
Post.create(user_id: 55, division_id: 8, name: 'старший преподаватель', post_type_id: 2, parent_id: 52)