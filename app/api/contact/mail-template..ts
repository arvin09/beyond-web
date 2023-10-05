export function mailTemplate(body:any): any {
    const template: any = {
        subject: {
          contact: `Contact ${body.name} for a villa booking`,
          enquire: `Enquire for a villa booking from ${body.name}`,
        },
        html: {
          contact: `<b><u>Customer Details</u></b><br><br>
          <b>Name: </b>${body.name}<br>
          <b>Mobile: </b>${body.phone}<br>
          <p> ${body.message} </p>
          <br>
          <hr style="width:50%;text-align:left;margin-left:0"> 
          <b>Regards,</b><br>
          <b>Goa Beyond</b>
          `,
          enquire: `<b><u>Enquire Details</u></b><br><br>
          <b>Name: </b>${body.name}<br>
          <b>Mobile: </b>${body.phone}<br>
          <p><b>Villa:</b> ${body.hotel}</p>
          <p<b>Guest Count:</b> ${body.guestCount}</p>
          <p><b>Check In Date:</b> ${body.checkInDate}</p>
          <p><b>Check Out Date:</b> ${body.checkOutDate}</p>
          <hr style="width:50%;text-align:left;margin-left:0"> 
          <b>Regards,</b><br>
          <b>Goa Beyond</b>
          `,
        },
      }

      return { subject: template.subject[body.type], html : template.html[body.type]}
      
}