import React from 'react';
import styled, { css } from 'styled-components';
import Title from 'components/atoms/title/title';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Footer from 'components/organisms/footer/footer';
const tab = [1, 2, 3, 4, 5];
const formData = {
    type: ['text', 'email', 'text'],
    name: ['name', 'email', 'message'],
    placeholder: [
        'Imie',
        'Adres mailowy',
        'Wiadomość',
    ],
};
const randomTab = [1, 2, 3, 4, 5, 6, 7, 8];
const Wrapper = styled.div`
  width:100vw;
  height:65vh;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 440px) {
        ${({ sidebaropen }) =>
            sidebaropen &&
            css`
                display: none;
            `}
    }
`;

const Form = styled.form`
    width: 80vw;
    height: 55vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    background-color: black;
    box-shadow: 0 0 30px #333;
    color: white;
    @media (max-width: 440px) {
        width: 80vw;
        height: 80vh;
    }
`;

const Button = styled.button`
    margin: 15px 0;
    background-color: white;
    color: black;
    border-radius: 5px;
    width: 140px;
    font-size: 2rem;
    &:hover {
        cursor: pointer;
        background-color: black;
        color: white;
        border: none;
    }
`;

const Input = styled.input`
    padding: 15px 0;
    width: 30vw;
    display: flex;
    align-items: left;
    border: none;
    border-bottom: 3px solid black;
    text-align: center;
    @media (max-width: 440px) {
        width: 60vw;
    }
`;

const ContactTitle = styled(Title)`
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 6rem;
    @media (max-width: 440px) {
        font-size: 4rem;
        margin: 70px 0 0 0;
    }
`;
const Contact = ({ sidebarOpen }) => {
    return (
        <>
            <MainTemplate bottom>
                <Wrapper
                    sidebaropen={sidebarOpen}
                >
                    <ContactTitle>
                        Kontakt
                    </ContactTitle>
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            message: '',
                        }}
                        validate={(values) => {
                            const errors = {};
                            if (!values.email) {
                                errors.email =
                                    'Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                    values.email,
                                )
                            ) {
                                errors.email =
                                    'Invalid email address';
                            }
                            return errors;
                        }}
                        onSubmit={(
                            values,
                            { setSubmitting },
                        ) => {
                            setTimeout(() => {
                                alert(
                                    JSON.stringify(
                                        values,
                                        null,
                                        2,
                                    ),
                                );
                                setSubmitting(
                                    false,
                                );
                            }, 400);
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                            <Form
                                onSubmit={
                                    handleSubmit
                                }
                            >
                                {formData.type.map(
                                    (item, i) => {
                                        return (
                                            <div
                                                key={
                                                    tab[
                                                        i
                                                    ]
                                                }
                                            >
                                                <h3
                                                    key={
                                                        formData
                                                            .placeholder[
                                                            i
                                                        ]
                                                    }
                                                >
                                                    {
                                                        formData
                                                            .placeholder[
                                                            i
                                                        ]
                                                    }{' '}
                                                </h3>
                                                <Input
                                                    key={
                                                        randomTab[
                                                            i
                                                        ]
                                                    }
                                                    type={
                                                        formData
                                                            .type[
                                                            i
                                                        ]
                                                    }
                                                    name={
                                                        formData
                                                            .name[
                                                            i
                                                        ]
                                                    }
                                                    onChange={
                                                        handleChange
                                                    }
                                                    onBlur={
                                                        handleBlur
                                                    }
                                                    value={
                                                        values[
                                                            formData
                                                                .name[
                                                                i
                                                            ]
                                                        ]
                                                    }
                                                    placeholder={
                                                        formData
                                                            .placeholder[
                                                            i
                                                        ]
                                                    }
                                                    id={
                                                        formData
                                                            .name[
                                                            i
                                                        ]
                                                    }
                                                    autoComplete="off"
                                                />
                                                {errors[
                                                    formData
                                                        .name[
                                                        i
                                                    ]
                                                ] &&
                                                    touched[
                                                        formData
                                                            .name[
                                                            i
                                                        ]
                                                    ] &&
                                                    errors[
                                                        formData
                                                            .name[
                                                            i
                                                        ]
                                                    ]}
                                            </div>
                                        );
                                    },
                                )}
                                <Button type="submit">
                                    WYŚLIJ
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Wrapper>
            </MainTemplate>
            <Footer />
        </>
    );
};
const mapStateToProps = (state) => {
    const { sidebarOpen } = state;
    return { sidebarOpen };
};
export default connect(mapStateToProps)(Contact);
Contact.propTypes = {
    sidebarOpen: PropTypes.bool,
};
