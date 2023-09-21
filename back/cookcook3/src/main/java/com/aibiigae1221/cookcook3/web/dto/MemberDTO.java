package com.aibiigae1221.cookcook3.web.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class MemberDTO {
	
	@Size(min=6, max=20, message="유저 아이디는 최소 6자리에서 최대 20자리여야 합니다.")
	@NotBlank(message = "유저 아이디는 최소 6자리에서 최대 20자리여야 합니다.")
	private String userId;
	
	@Size(min=4, max=12, message="비밀번호는 최소 4자리에서 최대 12자리여야 합니다.")
	@NotBlank(message = "비밀번호는 최소 4자리에서 최대 12자리여야 합니다.")
	private String password;
	
	@Size(min=2, max=12, message="닉네임은 최소 2자리에서 최대 12자리여야 합니다.")
	@NotBlank(message = "닉네임은 최소 2자리에서 최대 12자리여야 합니다.")
	private String nickname;
}
