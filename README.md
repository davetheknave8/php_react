
# About this Project

## The PET HOTEL

    This project is a full-stack application where the client runs completely on React.js and the server-side runs on PHP.
it's main features are to add a new owner and the pets they plan on bringing with them. The user will be able to 
'check-in' 'delete' themselves or their pets and 'update' any information on a specific pet or owner. 

### `npm start`

Runs the app in the development mode.<br>
    - Run client on [http://localhost:3000]

        -The proxy has been modified to run on '0.0.0:4000'

    - Set Server to [php -S 0.0.0:4000]

# Images
- similiar to React.js we run an axios.post to the file path '/addOwner.php' with the data that we want to associate with it.

![Add-Owner-Client-Side](/images/addOwnerClientSideSaga.png)

- on the server-side, which is entirely PHP, we make the connection to our db using 'pg_connect'
- the file_get_contents('php://input') is where the file_get_contents is reading the 'php://input which is the POST we sent over from the client-side.

![Add-Owner-Client-Side](/images/addOwnerServerSide.png)

## Resources









