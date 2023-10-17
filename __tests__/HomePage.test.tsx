import CartDetails from '@/components/CartDetails'
import Nav from '@/components/Nav'
import {render, screen} from '@testing-library/react'
describe('Home page rendering',()=>{
    it('Should have a Style and Comfort text',()=>{
       render(<Nav/>)
        screen.getAllByText('Styles')
    })
})