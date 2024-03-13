import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faMoon,
    faSatelliteDish,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';

import Menu from '~/components/Popper/Menu/Menu';
import { MessageIcon, InboxIcon } from '~/components/Icons';
import Image from '~/components/Image/Image';
import Search from '../Search';

import config from '~/config';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faSatelliteDish} />,
        title: 'Trung tâm Nhà sáng tạo LIVE',
        to: '/live/creators/vi-VN/?enter_from=more&lang=vi-VN&region=VN',
    },
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'vi', title: 'Tiếng Việt' },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Chế độ tối',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faSatelliteDish} />,
        title: 'Xem hồ sơ',
        to: '/live/creators/vi-VN/?enter_from=more&lang=vi-VN&region=VN',
    },
    {
        icon: <FontAwesomeIcon icon={faSatelliteDish} />,
        title: 'Yêu thích',
        to: '/live/creators/vi-VN/?enter_from=more&lang=vi-VN&region=VN',
    },
    {
        icon: <FontAwesomeIcon icon={faSatelliteDish} />,
        title: 'Nhận xu',
        to: '/live/creators/vi-VN/?enter_from=more&lang=vi-VN&region=VN',
    },
    {
        icon: <FontAwesomeIcon icon={faSatelliteDish} />,
        title: 'LIVE Studio',
        to: '/live/creators/vi-VN/?enter_from=more&lang=vi-VN&region=VN',
    },
    {
        icon: <FontAwesomeIcon icon={faSatelliteDish} />,
        title: 'Bộ cung cụ dành cho doanh nghiệp',
        to: '/live/creators/vi-VN/?enter_from=more&lang=vi-VN&region=VN',
    },
    {
        icon: <FontAwesomeIcon icon={faSatelliteDish} />,
        title: 'Trung tâm LIVE',
        to: '/live/creators/vi-VN/?enter_from=more&lang=vi-VN&region=VN',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSatelliteDish} />,
        title: 'Đăng xuất',
        to: '/live/creators/vi-VN/?enter_from=more&lang=vi-VN&region=VN',
        separate: true,
    },
];

function Header() {
    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };
    const currentUser = true;
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('left-container')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="Tiktok" />
                    </Link>
                </div>
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Tin nhắn">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Hộp thư">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Tải lên
                            </Button>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/51f8e5c42cd7cf71a71dbdde71f552e7.jpeg?lk3s=a5d48078&x-expires=1710298800&x-signature=JVt%2FsCBmqTbRNzb4a43Hep46m7M%3D"
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
