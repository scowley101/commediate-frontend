import React from 'react';

export default function twoDecimalPlaces(number) {
        return (Math.round(number * 100) / 100).toFixed(2);
}
