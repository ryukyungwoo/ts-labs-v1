// Intersection Type으로 여러 역할(권한, 프로필 등) 합치기

type UserProfile = { id: string; name: string };
type AdminPrivileges = { isAdmin: true; permissions: string[] };

type AdminUser = UserProfile & AdminPrivileges;

const admin: AdminUser = {
  id: "u100",
  name: "관리자",
  isAdmin: true,
  permissions: ["USER_MANAGE", "SYSTEM_CONFIG"],
};

// 실무에서는 관리자의 정보를 이런 방식으로 합성해서 사용 가능!
function showAdminInfo(user: AdminUser) {
  console.log(
    `${user.name} (${user.id}) / 권한: ${user.permissions.join(", ")}`
  );
}

showAdminInfo(admin);
