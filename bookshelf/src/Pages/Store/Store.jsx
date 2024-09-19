import './Store.scss'

export default function Store(){

    return(
        <div className="Store">
            <div className="wrapper">
                <h1>Payment and Delivery</h1>
                <h2>Payment</h2>
                <p>
                Choose a payment method that is convenient for you - by bank card online or at the time of receiving the package (at the communication department or from the hands of the courier).
                </p>
                <h3>Online payment</h3>
                <p>You can pay for your order on the website using a Visa or MasterCard payment card. Payment of the order by payment card can be made from anywhere in the world. Provided that the card, phone and device from which you accessed our site are registered in the same country.</p>
                <p>Payment must be made exclusively through the Shopping Cart of our online store. Follow the prompts and instructions during checkout. bookclub.ua does not store or transfer payment card data. Information regarding users' payment information is entered on the secure UAPAY page, which complies with PCI DSS 3.2 information security standards and guarantees complete security of your data. After payment, you will receive a message about a successful transaction and a notification about the status of your order.</p>

                <h2>Delivery</h2>
                <p>We ship your books on weekdays every day.</p>

                <h3>Delivery servises</h3>
                <ul>
                    <li>Nova Poshta Global</li>
                    <li>Nova Poshta</li>
                    <li>Ukrposhta</li>
                    <li>Meest</li>
                </ul>
            </div>
        </div>
    )
}