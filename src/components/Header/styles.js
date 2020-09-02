import styled from 'styled-components';

export const ContainerPrimary = styled.div`
    height: 80px;
    padding: 0 30px;
    background: #7159c1;
    color: #FFF;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo-toogle {
        display: flex;
        align-items: center;
    }

    .icon-toogle {
        margin-right: 15px;
    }
`;

export const User = styled.div`
    height: 80;
    padding: 0 30;

    display: flex;
    align-items: center;

    img {
        width: 50px;
        height: 50px;

        border-radius: 5px;
        margin-left: 20px;
        margin-right: 5px;
    }

    .icon {
        margin-left: 20px;
    }
`;

export const ContainerSecondary = styled.div`
    height: 50px;
    padding: 0 30px;
    background: #6143C5;
    color: #FFF;
    display: flex;
    justify-content: space-between;

    border-top: 2px solid rgba(1, 1, 1, 0.05);

    .left {
        display: flex;
        align-items: center;
    }

    .left .first {
        display: flex;
        margin-right: 15px;
        padding-right: 15px;

        border-right: 2px solid rgba(0, 0, 0, 0.5);
        align-items: center;
    }

    .left .first h4 {
        margin-left: 15px;
    }

    .left .first h4 + h4 {
        opacity: 0.7;
    }

    .left .options {
        display: flex;
        align-items: center;
    }

    .left .options h4 {
        margin-left: 10px;
        opacity: 0.7;
    }

    .left .options + .options {
        margin-left: 15px
    }

    .right {
        display: flex;
        align-items: center;
    }

    .right button {
        padding: 7px 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        color: #FFF;
        font-weight: bold;

        background: #7159c1;
        border: none;
        border-radius: 5px;
    }

    .right .item {
        margin-left: 15px;
    }
`;