import PropTypes from "prop-types";

import {
    Transaction,
    Head,
    HeadRow,
    HeadTitle,
    Body,
    BodyRow,
    BodyData,
} from "./TransactionHistory.styled";

export const TransactionHistory = ({ items }) => (
    <Transaction>
        <Head>
            <HeadRow>
                <HeadTitle>Type</HeadTitle>
                <HeadTitle>Amount</HeadTitle>
                <HeadTitle>Currency</HeadTitle>
            </HeadRow>
        </Head>

        <Body>
            {items.map(({ id, type, amount, currency }) => (
                <BodyRow key={id}>
                    <BodyData>{type}</BodyData>
                    <BodyData>{amount}</BodyData>
                    <BodyData>{currency}</BodyData>
                </BodyRow>
            ))}
        </Body>
    </Transaction>
);

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        })
    ),
};