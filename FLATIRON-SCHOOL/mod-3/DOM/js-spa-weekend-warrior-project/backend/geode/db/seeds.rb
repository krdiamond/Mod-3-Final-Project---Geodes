# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

rock1 = Geoderock.create
rock2 = Geoderock.create
rock3 = Geoderock.create
rock4 = Geoderock.create
rock5 = Geoderock.create

crystal1 = Crystal.create(name:"Purple Crystal", img:"https://78.media.tumblr.com/ac571e2ec82fa1fd35cd0c6a94b73bc0/tumblr_o5f06wZkyi1szu3n9o1_r3_500.png", geoderock_id:1)
crystal2 = Crystal.create(name:"Ice Pop", img:"https://cdn-image.realsimple.com/sites/default/files/styles/portrait_435x518/public/cucumber-strawberry-pop.jpg?itok=1DfZtfDg", geoderock_id:1)
crystal3 = Crystal.create(name:"Puppy", img:"https://png.pngtree.com/element_pic/16/10/25/85c427cdb340530c73e5ccd4460b8d37.jpg",geoderock_id:1)



# //three.js
