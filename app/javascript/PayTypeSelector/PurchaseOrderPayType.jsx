import React from 'react'
import I18n from 'i18n-js/index.js.erb'

I18n.defaultLocale = "<%= I18n.default_locale %>";
I18n.locale = "<%= I18n.locale %>"

class PurchaseOrderPayType extends React.Component {
    render() {
        return (
            <div>
                <div className="field">
                    <label htmlFor="order_po_number">{I18n.t("orders.form.purchase_order_pay_type.po_number")}</label>
                    <input type="password" name="order[po_number]" id="order_po_number" />
                </div>
            </div>
        )
    }
}
export default PurchaseOrderPayType
