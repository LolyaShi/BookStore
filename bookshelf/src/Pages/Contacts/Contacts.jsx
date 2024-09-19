import './Contacts.scss'

export default function Contacts(){
     return(
        <div className="Contacts">
            <div className="wrapper">
                <h1>Contacts</h1>
                <p>You can call us everyday from 10am to 6pm. Please, leave youre number if you buy books online</p>

                <h3>Contact information</h3>
                <ul>
                    <li>
                        <span>Phone:</span>
                        0 (800) 10 13 20
                    </li>
                    <li>
                        <span>Email:</span>
                        bookshelf@gmail.com
                    </li>
                    <li>
                        <span>Adress:</span>
                        Kyiv, Ukraine, st.Vasylkivska 30
                    </li>
                </ul>
            </div>
        </div>
     )
}