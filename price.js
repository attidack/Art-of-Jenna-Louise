const pricePerSqIn = .34;
import value from './server/schemas/typeDefs'

function priceFider(value) {
    pricePerSqIn * value
}
