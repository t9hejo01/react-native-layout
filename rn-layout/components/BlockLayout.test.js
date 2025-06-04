import BlockLayout from "./BlockLayout";
import { render } from '@testing-library/react-native';

describe('BlockLayout', () => {
    it('renders all rows and blocks correctly', () => {
        const { getAllByTestId } = render(<BlockLayout />)

        const rows = getAllByTestId('row');
        expect(rows.length).toBe(6);
        
        const blocks = getAllByTestId('block');
        expect(blocks.length).toBe(10);
    })
})