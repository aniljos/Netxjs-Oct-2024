import {render, screen, fireEvent} from '@testing-library/react';
import Counter from './Counter';

describe("Counter tests", () => {

    it("should render the Counter", () => {

        render(<Counter initialValue={5}/>);
        const content = screen.getByText("Count: 5");
        expect(content).toBeInTheDocument();

    })

    it("should increment the Counter", () => {

        render(<Counter initialValue={5}/>);
        const content = screen.getByText("Count: 5");
        expect(content).toBeInTheDocument();

        const btn = screen.getByText("Inc");
        fireEvent.click(btn);

        let updatedContent = screen.getByText("Count: 7");
        expect(updatedContent).toBeInTheDocument();

        const input = screen.getByPlaceholderText("ctr");
        fireEvent.change(input, {target: {value: 20}});

        updatedContent = screen.getByText("Count: 20");
        expect(updatedContent).toBeInTheDocument();

    })

})