module.exports.isAdmin = (req, res, next) => {
  if (req.session.user && req.session.user.isAdmin) {
    next();
  } else {
    // res.status(401).send({ message: 'Invalid Admin Token' });
    res.redirect('/');
  }
};

module.exports.isLogin = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/user/login');
  }
};

module.exports.mailTemplate = (order) => {
  var orderItems = '';
  for (let i = 0; i < order.items.length; i++) {
    let item = order.items[i];
    orderItems += `
    <tr>
                                    <td>
                                        <table style="float:left">
                                            <tr>
                                                <td style="width:180px" align="center">
                                                    <img src="${item.image}"
                                                        width="125">
                                                </td>
                                            </tr>
                                        </table>
                                        <table align="right" style="border-spacing:0px; width: 400px;">
                                            <tr>
                                                <td style="padding:0;Margin:5px">
                                                    <p style="Margin:0;font-size:14px"><br></p>
                                                    <table style="border-spacing:0px;width:100%">
                                                        <tr>
                                                            <td style="padding:0;Margin:0; color: #000000 !important;">${item.name} <br>Size ${item.size}</td>
                                                            <td style="padding:0;Margin:0;width:60px;text-align:left; color: #000000 !important;">${item.quantity}
                                                            </td>
                                                            <td style="padding:0;Margin:0;width:100px;text-align:left; color: #000000 !important;">
                                                                $${item.price}</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding:0;Margin:0;border-bottom:3px solid #efefef"></td>
                                </tr>
    `;
  }
 return `
 <!DOCTYPE>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"
    style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title>Email</title>
    <style type="text/css">
        #outlook a {
            padding: 0;
        }

        .ExternalClass {
            width: 100%;
        }

        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height: 100%;
        }

        .es-button {
            mso-style-priority: 100 !important;
            text-decoration: none !important;
        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        .es-desk-hidden {
            display: none;
            float: left;
            overflow: hidden;
            width: 0;
            max-height: 0;
            line-height: 0;
            mso-hide: all;
        }

        [data-ogsb] .es-button {
            border-width: 0 !important;
            padding: 10px 20px 10px 20px !important;
        }

        @media only screen and (max-width:600px) {

            p,
            ul li,
            ol li,
            a {
                line-height: 150% !important
            }

            h1 {
                font-size: 32px !important;
                text-align: center;
                line-height: 120% !important
            }

            h2 {
                font-size: 28px !important;
                text-align: center;
                line-height: 120% !important
            }

            h3 {
                font-size: 22px !important;
                text-align: center;
                line-height: 120% !important
            }

            .es-header-body h1 a,
            .es-content-body h1 a,
            .es-footer-body h1 a {
                font-size: 32px !important
            }

            .es-header-body h2 a,
            .es-content-body h2 a,
            .es-footer-body h2 a {
                font-size: 28px !important
            }

            .es-header-body h3 a,
            .es-content-body h3 a,
            .es-footer-body h3 a {
                font-size: 22px !important
            }

            .es-header-body p,
            .es-header-body ul li,
            .es-header-body ol li,
            .es-header-body a {
                font-size: 18px !important
            }

            .es-content-body p,
            .es-content-body ul li,
            .es-content-body ol li,
            .es-content-body a {
                font-size: 18px !important
            }

            .es-footer-body p,
            .es-footer-body ul li,
            .es-footer-body ol li,
            .es-footer-body a {
                font-size: 18px !important
            }

            .es-infoblock p,
            .es-infoblock ul li,
            .es-infoblock ol li,
            .es-infoblock a {
                font-size: 14px !important
            }

            *[class="gmail-fix"] {
                display: none !important
            }

            .es-m-txt-c,
            .es-m-txt-c h1,
            .es-m-txt-c h2,
            .es-m-txt-c h3 {
                text-align: center !important
            }

            .es-m-txt-r,
            .es-m-txt-r h1,
            .es-m-txt-r h2,
            .es-m-txt-r h3 {
                text-align: right !important
            }

            .es-m-txt-l,
            .es-m-txt-l h1,
            .es-m-txt-l h2,
            .es-m-txt-l h3 {
                text-align: left !important
            }

            .es-m-txt-r img,
            .es-m-txt-c img,
            .es-m-txt-l img {
                display: inline !important
            }

            .es-button-border {
                display: block !important
            }

            a.es-button,
            button.es-button {
                font-size: 22px !important;
                display: block !important;
                border-left-width: 0px !important;
                border-right-width: 0px !important
            }

            .es-btn-fw {
                border-width: 10px 0px !important;
                text-align: center !important
            }

            .es-adaptive table,
            .es-btn-fw,
            .es-btn-fw-brdr,
            .es-left,
            .es-right {
                width: 100% !important
            }

            .es-content table,
            .es-header table,
            .es-footer table,
            .es-content,
            .es-footer,
            .es-header {
                width: 100% !important;
                max-width: 600px !important
            }

            .es-adapt-td {
                display: block !important;
                width: 100% !important
            }

            .adapt-img {
                width: 100% !important;
                height: auto !important
            }

            .es-m-p0 {
                padding: 0px !important
            }

            .es-m-p0r {
                padding-right: 0px !important
            }

            .es-m-p0l {
                padding-left: 0px !important
            }

            .es-m-p0t {
                padding-top: 0px !important
            }

            .es-m-p0b {
                padding-bottom: 0 !important
            }

            .es-m-p20b {
                padding-bottom: 20px !important
            }

            .es-mobile-hidden,
            .es-hidden {
                display: none !important
            }

            tr.es-desk-hidden,
            td.es-desk-hidden,
            table.es-desk-hidden {
                width: auto !important;
                overflow: visible !important;
                float: none !important;
                max-height: inherit !important;
                line-height: inherit !important
            }

            tr.es-desk-hidden {
                display: table-row !important
            }

            table.es-desk-hidden {
                display: table !important
            }

            td.es-desk-menu-hidden {
                display: table-cell !important
            }

            .es-menu td {
                width: 1% !important
            }

            table.es-table-not-adapt,
            .esd-block-html table {
                width: auto !important
            }

            table.es-social {
                display: inline-block !important
            }

            table.es-social td {
                display: inline-block !important
            }

            .es-menu td a {
                font-size: 18px !important
            }
        }
    </style>
</head>

<body style="background-color: antiquewhite; margin: auto; background-color: #fcb045">
    <table align="center" style="border-spacing:0px; margin-bottom: 1rem;">
        <tr>
            <td class="es-m-p0l es-m-txt-c" align="center"
                style="padding: 10px;Margin:0;padding-left:15px;font-size:0;  ">
                <a href="http://localhost:3000/" target="_blank"><img
                        src="https://firebasestorage.googleapis.com/v0/b/shoe-shop-6a8b1.appspot.com/o/logo%2Flogo.png?alt=media&token=530c4454-b7dd-4d27-847b-d5d7613fb367"
                        alt="Petshop logo" title="Petshop logo" width="118"></a>
            </td>
        </tr>
        <tr>
            <td align="center" style="padding: 10px;Margin:0;padding-left:15px; background-color: #ffffff ">
                <table>
                    <tr style="border-collapse:collapse">
                        <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:15px">
                            <h1
                                style="Margin:0;line-height:36px;font-family:'trebuchet ms', helvetica, sans-serif;font-size:32px;font-style:normal;font-weight:normal;color:#333333">
                                Thanks for your order<br></h1>
                        </td>
                    </tr>
                    <tr style="border-collapse:collapse">
                        <td align="center"
                            style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:40px;padding-right:40px">
                            <p
                                style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:30px;color:#333333;font-size:19px">
                                Your order is being delivered.<br>
                                Call us: 0123456789
                            </p>
                        </td>
                    </tr>
                    <tr style="border-collapse:collapse">
                        <td align="center" style="padding-bottom:10px;padding-top:15px"><span
                                class="es-button-border"><a href="http://localhost:3000/order/detail/${
                                  order._id
                                }"
                                    class="es-button" target="_blank"
                                    style="color:#FFFFFF;font-size:20px;border-style:solid;border-color:#d48344;border-width:10px 20px 10px 20px;display:inline-block;background:#d48344;border-radius:5px">View
                                    order status</a></span></td>
                    </tr>
                </table>
                <div
                    style="border-spacing:0px;background-color:#FFFFFF;width:650px; display: flex;background-color: #fef9ef; align-items: flex-start; color: #000000;">
                    <table class="es-left" width="50%" cellspacing="0" cellpadding="0"
                        style="border-spacing:0px;float:left">
                        <tr>
                            <td>
                                <table style="border-spacing:0px;" width="100%" bgcolor="#fef9ef">
                                    <tr>
                                        <td style="padding-top:20px;padding-left:20px;padding-right:20px">
                                            <h4
                                                style="Margin:0;line-height:120%;font-family:'trebuchet ms', helvetica, sans-serif; font-size: 1.25rem;">
                                                SUMMARY:</h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="padding:0;Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px">
                                            <div><span style="font-size:17px;line-height:21px; font-weight: bold;">Order
                                                    #:</span>
                                                <span style="font-size:17px;line-height:21px">${
                                                  order._id
                                                }</span>
                                                <br>
                                                <span
                                                    style="font-size:17px;line-height:21px; font-weight: bold; color: #000000 !important;">Order
                                                    Date:</span>
                                                <span
                                                    style="font-size:17px;line-height:21px; color: #000000 !important;">${order.createdAt
                                                      .toString()
                                                      .slice(0, 15)}</span>
                                                <br>

                                                <span
                                                    style="font-size:17px;line-height:21px; font-weight: bold;; color: #000000 !important;">Order
                                                    Total:</span>
                                                <span
                                                    style="font-size:17px;line-height:21px; color: #000000 !important;">$${
                                                      order.total
                                                    }</span>
                                            </div>

                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table class="es-right" width="50%" cellspacing="0" cellpadding="0"
                        style="border-spacing:0px;float:right">
                        <tr style="border-collapse:collapse">
                            <td style="width: 100%;">
                                <table style="border-spacing:0px;" width="100%" bgcolor="#fef9ef">
                                    <tr style="border-collapse:collapse">
                                        <td align="left"
                                            style="padding-top:20px;padding-left:20px;padding-right:20px; width: 100%;">
                                            <h4
                                                style="Margin:0;line-height:120%;font-family:'trebuchet ms', helvetica, sans-serif; font-size: 1.25rem; color: #000000 !important;">
                                                SHIPPING INFO:<br></h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="padding:0;Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px; width: 100%;">
                                            <table style="border-spacing:0px;width:100%">
                                                <tr>
                                                    <td style="width: 100%;"><span
                                                            style="font-size:17px;line-height:21px; color: #000000 !important;">${
                                                              order.userInfo
                                                                .fullname
                                                            }</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="width: 100%;"><span
                                                            style="font-size:17px;line-height:21px; color: #000000 !important;">${
                                                              order.userInfo
                                                                .phoneNumber
                                                            }</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="width: 100%;"><span
                                                            style="font-size:17px;line-height:21px; color: #000000 !important;">${
                                                              order.userInfo
                                                                .address
                                                            }</span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </div>

                <table>
                    <tr>
                        <td>
                            <table style="border-spacing:0px;width:600px">
                                <tr>
                                    <td style="padding-bottom:10px;padding-left:20px;padding-right:20px">
                                        <table style="border-spacing:0px;float:left">
                                            <tr>
                                                <td style="padding:0;Margin:0;padding-left:20px">
                                                    <h4
                                                        style="Margin:0;line-height:120%;font-family:'trebuchet ms', helvetica, sans-serif">
                                                        ITEMS ORDERED</h4>
                                                </td>
                                            </tr>
                                        </table>
                                        <table align="right" style="width:300px">
                                            <tr style="width:100%">
                                                <td style="padding:0;Margin:0"><span
                                                        style="font-size:13px"><b>NAME</b></span></td>
                                                <td style="padding:0;Margin:0;width:60px;text-align:center"><span
                                                        style="font-size:13px"><span
                                                            style="line-height:100%"><b>QTY</b></span></span>
                                                </td>
                                                <td style="padding:0;Margin:0;width:100px;text-align:center"><span
                                                        style="font-size:13px"><span
                                                            style="line-height:100%"><b>PRICE</b></span></span>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding:0;Margin:0;border-bottom:3px solid #efefef"></td>
                                </tr>
                                ${orderItems}
                                <tr>
                                    <td
                                        style="padding-top:5px;padding-left:20px;padding-bottom:30px;padding-right:40px; width: 540px;">
                                        <table style="width:500px" align="right">
                                            <tr>
                                                <td style="text-align:right;font-size:18px;line-height:27px">Subtotal:
                                                </td>
                                                <td style="text-align:right;font-size:18px;line-height:27px">
                                                    $${order.total}</td>
                                            </tr>
                                            <tr>
                                                <td style="text-align:right;font-size:18px;line-height:27px">Flat-rate
                                                    Shipping:</td>
                                                <td
                                                    style="text-align:right;font-size:18px;line-height:27px;color:#d48344">
                                                    <strong>FREE</strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="text-align:right;font-size:18px;line-height:27px">Discount:
                                                </td>
                                                <td style="text-align:right;font-size:18px;line-height:27px">$0.00</td>
                                            </tr>
                                            <tr>
                                                <td style="text-align:right;font-size:18px;line-height:27px">
                                                    <strong>Order Total:</strong>
                                                </td>
                                                <td
                                                    style="text-align:right;font-size:18px;line-height:27px;color:#d48344">
                                                    <strong>$${
                                                      order.total
                                                    }</strong>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

</body>

</html>
 `;
};
