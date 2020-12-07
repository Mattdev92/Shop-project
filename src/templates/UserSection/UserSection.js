import React from 'react';
import styled, { css } from 'styled-components';
import Cardlazy from 'components/molecules/card/cardlazy';
import { connect } from 'react-redux';
import { textFilter } from 'actions';
import PropTypes from 'prop-types';
import { TimelineMax } from 'gsap';
import Loupe from 'assets/loupe.svg';


const InnerWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
    padding: 10px;
    @media (max-width: 840px) and(min-width: 441px) {
        grid-template-columns: 300px 300px;
        justify-content: center;
        grid-gap: 100px;
        align-items: center;
    }
    @media (max-width: 440px) {
        grid-template-columns: 300px;
        justify-content: center;
        grid-gap: 100px;
        align-items: center;
        ${({ sidebarOpen }) =>
            sidebarOpen &&
            css`
                display: none;
            `}
    }
`;
const FilterWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 440px) {
    }
`;
const Input = styled.input`
    width: 20vw;
    border: none;
    border-bottom: 1px solid black;
    padding: 5px;
    height: 30px;
    outline: none;
    color: #9dbfaf;
    margin: 20px;
    @media (max-width: 440px) {
        width: 150px;
    }
    &::placeholder {
    color: black;
    opacity:60%;
  }
`;
const Img = styled.div`
    width: 20px;
    height: 20px;
    margin: 0;
    background-image: url(${Loupe});
`;

class UserTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.myCard = null;
        this.tlMain = new TimelineMax();
    }

    componentDidMount() {
        // use the node ref to create the animation
        this.tlMain
            .fromTo(
                this.myCard,
                { autoAlpha: 0 },
                { duration: 0.8, autoAlpha: 1 },
            )
            .delay(0.4);
    }

    render() {
        const {
            pathname,
            Man,
            Woman,
            textFilter,
            eventText,
            sidebarOpen,
        } = this.props;
        
        return (
            <div>
                <FilterWrapper
                    sidebarOpen={sidebarOpen}
                >
                    <Img/>
                    <Input
                        onChange={(event) =>
                            textFilter(
                                event.target
                                    .value,
                            )
                        }
                        type="text"
                        placeholder="Szukaj"
                    />
                </FilterWrapper>
                
                <InnerWrapper
                    sidebarOpen={sidebarOpen}
                    ref={(card) =>
                        (this.myCard = card)
                    }
                >
                    {pathname.includes('Ona')
                        ? eventText === ''
                            ? Woman.map((
                                  //Display all Woman products
                                  product,
                              ) => (
                                  <Cardlazy
                                      product={
                                          product
                                      }
                                      key={
                                          product
                                      }
                                  >
                                      {product[1]}{' '}
                                      {product[2]}
                                      zł
                                  </Cardlazy>
                              ))
                            : Woman.filter(
                                  (product) =>
                                      product[1]
                                          .toUpperCase()
                                          .includes(
                                              eventText.toUpperCase(),
                                          ),
                              ).map((
                                  product,
                                  //Display filtered Woman products
                              ) => (
                                  <Cardlazy
                                      product={
                                          product
                                      }
                                      key={
                                          product
                                      }
                                  >
                                      {product[1]}{' '}
                                      {product[2]}
                                      zł
                                  </Cardlazy>
                              ))
                        : pathname.includes(
                              'On',
                          ) &&
                          (eventText === ''
                              ? Man.map(
                                    (product) => (
                                        <Cardlazy
                                            product={
                                                product
                                            }
                                            key={
                                                product
                                            }
                                        >
                                            {
                                                product[1]
                                            }{' '}
                                            {
                                                product[2]
                                            }
                                            zł
                                        </Cardlazy>
                                    ),
                                )
                              : Man.filter(
                                    (product) =>
                                        product[1]
                                            .toUpperCase()
                                            .includes(
                                                eventText.toUpperCase(),
                                            ),
                                ).map((
                                    product,
                                    //Display filtered Man products
                                ) => (
                                    <Cardlazy
                                        product={
                                            product
                                        }
                                        key={
                                            product
                                        }
                                    >
                                        {
                                            product[1]
                                        }{' '}
                                        {
                                            product[2]
                                        }
                                        zł
                                    </Cardlazy>
                                )))}
                    {pathname.includes(
                        'Okazje',
                    ) &&
                        (eventText === ''
                            ? Woman.concat(Man)
                                  .filter(
                                      (product) =>
                                          product[2] <
                                          100,
                                  )
                                  .map((
                                      //Display all Woman products
                                      product,
                                  ) => (
                                      <Cardlazy
                                          product={
                                              product
                                          }
                                          key={
                                              product
                                          }
                                      >
                                          {
                                              product[1]
                                          }{' '}
                                          {
                                              product[2]
                                          }
                                          zł
                                      </Cardlazy>
                                  ))
                            : Woman.concat(Man)
                                  .filter(
                                      (product) =>
                                          product[2] <
                                              100 &&
                                          product[1]
                                              .toUpperCase()
                                              .includes(
                                                  eventText.toUpperCase(),
                                              ),
                                  )
                                  .map((
                                      product,
                                      //Display filtered Man products
                                  ) => (
                                      <Cardlazy
                                          product={
                                              product
                                          }
                                          key={
                                              product
                                          }
                                      >
                                          {
                                              product[1]
                                          }{' '}
                                          {
                                              product[2]
                                          }
                                          zł
                                      </Cardlazy>
                                  )))}
                </InnerWrapper>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {
        Man,
        Woman,
        eventText,
        sidebarOpen,
    } = state;
    return { Man, Woman, eventText, sidebarOpen };
};
const mapDispatchToProps = (dispatch) => ({
    textFilter: (eventText) =>
        dispatch(textFilter(eventText)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserTemplate);
UserTemplate.propTypes = {
    pathname: PropTypes.string,
    Man: PropTypes.array,
    Woman: PropTypes.array,
    eventText: PropTypes.string,
    sidebarOpen: PropTypes.bool,
};
