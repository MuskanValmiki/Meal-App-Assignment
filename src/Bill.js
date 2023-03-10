import "./style.css"
function PayBill(props) {

    return (
        <div>
            <div className="heading">
                <div className="Div1">
                    <div className="h1"><h1>Muskan's Restaurant</h1><h1>INVOICE</h1></div>
                    <table>
                        <tr><td className="td1"><h4>BILLED TO:</h4></td><td>Really Great Company</td></tr>
                        <tr><td className="td1"><h4>PAY TO:</h4></td><td>Muskan Valmiki Sr. NO. 43, Gujarwadi, Narmada city, Katraj, Pune, Maharashtra-411046</td></tr>
                        <tr><td>Bank</td><td>Really Great Bank</td></tr>
                        <tr><td>Account Name</td><td>Muskan Valmikee</td></tr>
                        <tr><td>Account Number</td><td>0000 0000</td></tr>
                    </table>
                </div>
                <div className="Div2">
                    <table>
                        <thead>
                            <tr>
                                <th className="th">DISCRIPTION</th>
                                <th className="th">RATE</th>
                                <th className="th">AMOUNT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.obj.map((item) => {
                                return (
                                    <tr>
                                        <td className="td">{item.Discription}</td>
                                        <td className="td">Rs. {250}</td>
                                        <td className="td">{item.Price}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}
export default PayBill
