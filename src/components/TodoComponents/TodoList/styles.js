import styled from "styled-components";

export const Container = styled.div `
    max-height: 500px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 15px;
        background-color: white;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--text-body);
        border: 2px solid white;
        border-radius: 1rem;
    }

    @media (max-height: 926px) {
        max-height: 22rem;
    }

    @media (max-height: 844px) {
        max-height: 17rem;
    }

    @media (max-height: 780px) {
        max-height: 14.5rem;
    }

    @media (max-height: 600px) {
        max-height: 6.5rem;
    }
`

export const Todo = styled.div `
    max-width: 1120px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1rem 3.3rem;

        max-width: 800px;

        label {
            font-size: 1.08rem;
        }

        input {
            margin-right: 1rem;
        }
    }

    section {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        margin-right: 1.7rem;

        button {
            border: none;
            background-color: transparent;
            margin-right: 1.5rem;

            &:hover {
                filter: brightness(0.5)
            }
        }
    }

    .editButton:hover {
        filter: invert(0.5);
    }

    .custom-checkbox input{
        display: none;
    }

    .custom-checkbox input + label:before {
        content: "";
        min-width: 1.1rem;
        min-height: 1.1rem;
        border-radius: .2rem;
        display: inline-block;
        background-color: var(--text-body);
        vertical-align: middle;
        margin-right: 1rem;
        margin-bottom: .25rem;
    }

    .custom-checkbox input:checked + label:before {
        background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 10 10'%3E%3Cg class='nc-icon-wrapper' stroke-width='1' fill='%23555555'%3E%3Cpath fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' data-cap='butt' d='M2.83 4.72l1.58 1.58 2.83-2.83'/%3E%3C/g%3E%3C/svg%3E");
        background-position: center;
        background-color: var(--blue);
    }

    .custom-checkbox input:checked + label {
        text-decoration: line-through;
    }

    label:hover {
        cursor: pointer;
        filter: brightness(0.8);
        transition: filter .2s;
    }
`
