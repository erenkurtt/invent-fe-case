import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface dashboardItem {
    filterType: string;
    page: number;
    year: string;
    pagination: number;
    searchParam: string;
    totalResults: number;
}

interface DashboardState {
    dashboardItem: dashboardItem;
}

const initialState: DashboardState = {
    dashboardItem: {
        filterType: 'movie',
        page: 1,
        year: "",
        pagination: 1,
        searchParam: 'man',
        totalResults: 1,
    },
};

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setItemType: (state, action: PayloadAction<string>) => {
            if (state.dashboardItem) {
                state.dashboardItem.filterType = action.payload;
            }
        },
        setPage: (state, action: PayloadAction<number>) => {
            if (state.dashboardItem) {
                state.dashboardItem.page = action.payload;
            }
        },
        setYear: (state, action: PayloadAction<string>) => {
            if (state.dashboardItem) {
                state.dashboardItem.year = action.payload;
            }
        },
        setPagination: (state, action: PayloadAction<number>) => {
            if (state.dashboardItem) {
                state.dashboardItem.pagination = action.payload;
            }
        },
        setSearchParam: (state, action: PayloadAction<string>) => {
            if (state.dashboardItem) {
                state.dashboardItem.searchParam = action.payload;
            }
        },
        setTotalResults: (state, action: PayloadAction<number>) => {
            if (state.dashboardItem) {
                state.dashboardItem.totalResults = action.payload;
            }
        },
    },
});

export const { setItemType, setPage, setYear, setSearchParam, setPagination, setTotalResults } = dashboardSlice.actions;
export default dashboardSlice.reducer;