import { gql } from '@apollo/client'

const GET_FAQS = gql`
    query{
        faqs{
            data{
                attributes{
                    question
                    answer
                }
            }
        }
    }
`

export default GET_FAQS;