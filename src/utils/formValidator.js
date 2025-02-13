import checker from "./checker";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

const phone = (setLoading, initialPhone = "") => [
    () => ({
        async validator(_, value) {
            if (!value) return Promise.reject("Vui lòng nhập số điện thoại!");

            const phoneRegex = /^(0[2-9]|84[2-9])[0-9]{8}$/;
            const isInvalidFormat = !phoneRegex.test(value);
            const isSameAsInitial = value === initialPhone;

            if (isInvalidFormat) return Promise.reject("Số điện thoại không hợp lệ!");
            if (isSameAsInitial) return Promise.resolve();

            const phoneExists = await checker.checkPhoneExists(value, setLoading);
            if (phoneExists) return Promise.reject("Số điện thoại đã được sử dụng!");

            return Promise.resolve();
        },
    }),
];


const email = (setLoading, initialEmail = "", requireExist = true) => [
    () => ({
        async validator(_, value) {
            if (!value) return Promise.reject("Vui lòng nhập email!");

            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const isInvalidFormat = !emailRegex.test(value);
            const isSameAsInitial = value === initialEmail;

            if (isInvalidFormat) return Promise.reject("Email không đúng định dạng!");
            if (isSameAsInitial) return Promise.resolve();

            const emailExists = requireExist && await checker.checkEmailExists(value, setLoading);
            if (emailExists) return Promise.reject("Email đã được sử dụng!");

            return Promise.resolve();
        },
    }),
];

const birthday = (minAge = 18) => [
    () => ({
        validator(_, value) {
            if (!value) return Promise.reject("Vui lòng chọn ngày sinh!");

            if (!dayjs.isDayjs(value)) return Promise.reject("Ngày sinh không hợp lệ!");

            const today = dayjs();
            const age = today.diff(value, "year");

            if (value.isAfter(today, "day")) return Promise.reject("Ngày sinh không hợp lệ!");
            if (age < minAge) return Promise.reject(`Phải từ ${minAge} tuổi trở lên!`);

            return Promise.resolve();
        },
    }),
];



const fullName = () => [
    () => ({
        async validator(_, value) {
            if (!value) return Promise.reject("Vui lòng nhập họ tên!");

            value = value.trim();

            const hasInvalidChars = /[^a-zA-ZÀ-ỹ\s]/u.test(value);
            const hasExtraSpaces = /\s{2,}/.test(value);
            const isTooShort = value.length < 2;
            const isTooLong = value.length > 50;
            const isWrongCapitalization = value
                .split(/\s+/)
                .some((word) => word && word[0] !== word[0].toUpperCase());

            if (hasInvalidChars) return Promise.reject("Họ tên không hợp lệ!");
            if (hasExtraSpaces) return Promise.reject("Họ tên có khoảng trắng thừa!");
            if (isTooShort) return Promise.reject("Họ tên tối thiểu 2 ký tự!");
            if (isTooLong) return Promise.reject("Họ tên tối đa 50 ký tự!");
            if (isWrongCapitalization) return Promise.reject("Vui lòng viết hoa ký tự đầu!");

            return Promise.resolve();
        },
    }),
];

const password = ({ minLength = 8, maxLength = 50, requireUpper = false, requireLower = false, requireNumber = false, requireSpecial = false } = {}) => [
    () => ({
        validator(_, value) {
            if (!value) return Promise.reject("Vui lòng nhập mật khẩu!");
            if (value.length < minLength) return Promise.reject(`Mật khẩu tối thiểu ${minLength} kí tự!`);
            if (value.length > maxLength) return Promise.reject(`Mật khẩu tối đa ${maxLength} kí tự!`);

            if (requireUpper && !/[A-Z]/.test(value)) return Promise.reject("Mật khẩu cần ít nhất 1 chữ hoa!");
            if (requireLower && !/[a-z]/.test(value)) return Promise.reject("Mật khẩu cần ít nhất 1 chữ thường!");
            if (requireNumber && !/[0-9]/.test(value)) return Promise.reject("Mật khẩu cần ít nhất 1 số!");
            if (requireSpecial && !/[!@#$%^&*(),.?":{}|<>]/.test(value)) return Promise.reject("Mật khẩu cần ít nhất 1 ký tự đặc biệt!");

            return Promise.resolve();
        },
    }),
];

const iso = (setLoading, initialISO = "") => [
    () => ({
        async validator(_, value) {
            if (!value) return Promise.reject("Vui lòng nhập ISO!");
            if (value.length < 2) return Promise.reject("ISO tối thiểu 2 kí tự!");
            if (value.length > 3) return Promise.reject("ISO tối đa 3 kí tự!");

            const isSameAsInitial = value === initialISO;
            if (isSameAsInitial) return Promise.resolve();

            const ISOExits = await checker.checkISOExists(value, setLoading);
            if (ISOExits) return Promise.reject("ISO đã tồn tại!");

            return Promise.resolve();
        },
    }),
];


export default { phone, email, fullName, birthday, password, iso };
