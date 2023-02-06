import PropTypes from "prop-types";

import {
    StatisticsContainer,
    Title,
    StatList,
    StatItem,
    Label,
    Percentage,
} from "./Statistics.styled";

export const Statistics = ({ title, stats }) => (
    <StatisticsContainer>
        {title && <Title>Upload stats</Title>}

        <StatList>
            {stats.map(({ id, label, percentage }) => (
                <StatItem key={id}>
                    <Label>{label}</Label>
                    <Percentage>{percentage}%</Percentage>
                </StatItem>
            ))}
        </StatList>
    </StatisticsContainer>
);

Statistics.prototype = {
    title: PropTypes.string,
    stats: PropTypes.shape({
        label: PropTypes.string,
        percentage: PropTypes.number,
    }),
};