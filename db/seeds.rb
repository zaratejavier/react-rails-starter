100.times do
  Product.create(
    name: Faker::Commerce.product_name,
    description: Faker::Lorem.sentence,
    price: Faker::Commerce.price.to_f,
    department: Faker::Commerce.department,
  )
end

puts "100 Products Seeded"
