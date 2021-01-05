import React, { Component } from 'react'
import { Container, Header, Item, Input, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Card, CardItem, Text } from 'native-base';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { ScrollView, View } from 'react-native';
import Constants from 'expo-constants';

export class main extends Component {
    render() {
        return (
            <Container style={{ marginTop: Constants.statusBarHeight }}>

                {/* Header Data */}
                <Header style={{ backgroundColor: '#60769A' }}>

                    <Left>
                      <Button transparent>
                          <MaterialCommunityIcons name="menu" size={28} color="white" />
                      </Button>
                    </Left>

                    <Body>
                      <Title style={{ color: '#fff', fontSize: 20 }}>Header</Title>
                    </Body>

                    <Right>
                      <Button transparent>
                          <MaterialCommunityIcons name="bell" size={25} color="white" />
                      </Button>
                      <Button transparent>
                          <MaterialCommunityIcons name="star" size={28} color="white" />
                      </Button>
                    </Right>

                </Header>

                {/* Screen Body Data */}
                <View style={{ padding: 2, margin: 2 }}>

                    <Card style={{ padding:10, margin: 10, borderColor: '#60769A', borderRadius: 20, borderBottomWidth: 2, borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2 }}>
                        <ScrollView>
                            <View>
                                <CardItem>
                                  <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                    <Text style={{ fontSize: 15, color: '#000', fontWeight: '700' }}>Product Description</Text>
                                    <Text style={{ fontSize: 12, color: '#a7a7a7', fontWeight: '400' }}>Codeic: 00000000000</Text>
                                  </View>
                                  <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: 15, color: '#000', fontWeight: '700' }}>10, 0000$</Text>
                                    <Text style={{ fontSize: 12, color: '#a7a7a7', fontWeight: '400' }}>Quantitia: 0000</Text>
                                  </View>
                                </CardItem>
                                <CardItem>
                                  <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                    <Text style={{ fontSize: 15, color: '#000', fontWeight: '700' }}>Product Description</Text>
                                    <Text style={{ fontSize: 12, color: '#a7a7a7', fontWeight: '400' }}>Codeic: 00000000000</Text>
                                  </View>
                                  <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: 15, color: '#000', fontWeight: '700' }}>10, 0000$</Text>
                                    <Text style={{ fontSize: 12, color: '#a7a7a7', fontWeight: '400' }}>Quantitia: 0000</Text>
                                  </View>
                                </CardItem>
                                <CardItem>
                                  <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                    <Text style={{ fontSize: 15, color: '#000', fontWeight: '700' }}>Product Description</Text>
                                    <Text style={{ fontSize: 12, color: '#a7a7a7', fontWeight: '400' }}>Codeic: 00000000000</Text>
                                  </View>
                                  <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: 15, color: '#000', fontWeight: '700' }}>10, 0000$</Text>
                                    <Text style={{ fontSize: 12, color: '#a7a7a7', fontWeight: '400' }}>Quantitia: 0000</Text>
                                  </View>
                                </CardItem>
                            </View>
                        </ScrollView>
                    </Card>

                    <Card style={{ padding:10, margin: 10, borderColor: '#60769A', borderRadius: 20, borderBottomWidth: 2, borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2 }}>
                        <View>
                            <CardItem>
                              <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                <Text style={{ fontSize: 18, color: '#60769A', fontWeight: '300' }}>Total Parziale</Text>
                              </View>
                              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: 18, color: '#60769A', fontWeight: '300' }}>10, 0000$</Text>
                              </View>
                            </CardItem>
                            <CardItem>
                              <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                <Text style={{ fontSize: 18, color: '#60769A', fontWeight: '300' }}>Sconto</Text>
                              </View>
                              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: 18, color: '#60769A', fontWeight: '300' }}>10, 0000$</Text>
                              </View>
                            </CardItem>
                            <CardItem>
                              <View style={{ flex: 1, alignItems: 'flex-start' }}>
                                <Text style={{ fontSize: 20, color: '#60769A', fontWeight: '600' }}>TOTALE</Text>
                              </View>
                              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: 20, color: '#60769A', fontWeight: '600' }}>10, 0000$</Text>
                              </View>
                            </CardItem>
                        </View>
                    </Card>

                </View>

                <Content>
                    <View>
                        <Text style={{ color: '#B5B5B5', marginLeft: 8 }}>CLIENTE:</Text>
                        <Text style={{ color: '#B5B5B5', marginLeft: 8 }}>DATA E ORA</Text>
                        <Item>
                          <Feather style={{ margin: 8 }} active name='camera' size={26} color="#60769A" />
                          <Input style={{ fontWeight: '600', color: '#B5B5B5' }} placeholder='Scanziona Barcode'/>
                        </Item>
                    </View>
                </Content>

                <View style={{ padding: 20, margin: 20 }}>
                      <Card style={{ borderColor: '#60769A', borderRadius: 8, borderBottomWidth: 2, borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2 }}>
                        <View style={{ flex:1, alignItems: 'flex-start' }}>
                            <CardItem>
                              <Feather name="search" size={24} />
                            </CardItem>
                        </View>
                        <View style={{ flex:1, alignItems: 'center' }}>
                            <CardItem>
                              <Feather name="search" size={24} />
                            </CardItem>
                        </View>
                        <View style={{ flex:1, alignItems: 'flex-end' }}>
                            <CardItem>
                              <Feather name="search" size={24} />
                            </CardItem>
                        </View>
                      </Card>
                </View>

                {/* Footer Tab Bar Buttons */}
                <Footer style={{ backgroundColor: '#fff' }}>
                    <FooterTab>
                        <Button>
                            <Ionicons name="file-tray-stacked" size={24} color="#60769A" />
                        </Button>
                        <Button>
                            <Entypo name="list" size={24} color="#60769A" />
                        </Button>
                        <Button>
                            <FontAwesome5 name="user-alt" size={22} color="#60769A" />
                        </Button>
                        <Button>
                            <Entypo name="home" size={24} color="#60769A" />
                        </Button>
                        <Button>
                            <FontAwesome5 name="file-invoice" size={22} color="#60769A" />
                        </Button>
                        <Button>
                            <Ionicons name="md-calculator" size={24} color="#60769A" />
                        </Button>
                    </FooterTab>
                </Footer>

            </Container>
        )
    }
}

export default main
