import React from "react";
import SingleTicket from "./Div-Ticket-Single/Div-Ticket-Single.js"

const Tickets = () => {
    return (
      <div className="Tickets">
          <SingleTicket title="free" subtitle="regular manicure and pedicure" p="Limit 1 coupon per customer. Not valid with any other promo. Expires 03/22/22" />
          <SingleTicket title="$20" subtitle="special gel color (regular: $28)" p="Limit 1 coupon per customer. Not valid with any other promo. Expires 03/22/22" />
          <SingleTicket title="$30" subtitle="almond nails with gel color (regular: $38)" p="Limit 1 coupon per customer. Not valid with any other promo. Expires 03/22/22" />
          <SingleTicket title="$40" subtitle="full set white tip (regular: $48)" p="Limit 1 coupon per customer. Not valid with any other promo. Expires 03/22/22" />
      </div>
    )
}

export default Tickets