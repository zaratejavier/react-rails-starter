## instructions

### clone/git

1.  `git clone git@github.com:jimibue/react-rails-router-starter.git <ProjectName>`
2.  `git remote rm origin`
3.  create a new repo and add new origin
4.  `git add remote origin <ulr>`

### Rails

2. `cd <ProjectName>`
3. run `bundle`
4. in config/database yml replace database name to something else
   - in this case that would be react-rails-router...
5. `rails db:create db:migrate db:seed`
6. `rails s -p 3001`
7. check this route `http://localhost:3001/api/products` should see products

### React

1. `cd <ProjectName>/client`
2. run `yarn`
3. run `yarn start`
4. open `http://localhost:3000` (make sure rails is on port 3001)
