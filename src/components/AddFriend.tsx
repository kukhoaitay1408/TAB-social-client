// libs
import React, { useState } from 'react'
import { Button } from 'antd'
// models
import { ProfileType } from 'Models'

type AddFriendProps = {
  user: any
  profile: ProfileType
  handleFollow: () => void
  handleUnFriend: () => void
  handleSendFriendRequest: () => void
  handleUnFollow: () => void
  handleCancelFriendRequest: () => void
  handleAcceptFriendRequest: () => void
}

type FollowButtonProps = {
  isFollowed: boolean
  handleUnFollow: () => void
  handleFollow: () => void
}

const FollowButton: React.FC<FollowButtonProps> = (
  props: FollowButtonProps
) => {
  const { isFollowed, handleUnFollow, handleFollow } = props
  if (isFollowed) {
    return (
      <Button type="primary" className="mr-4" onClick={handleUnFollow}>
        Đang theo dõi
      </Button>
    )
  }
  return (
    <Button className="mr-4" onClick={handleFollow}>
      Theo dõi
    </Button>
  )
}

const AddFriend: React.FC<AddFriendProps> = (props: AddFriendProps) => {
  const {
    user,
    profile,
    handleFollow,
    handleUnFriend,
    handleSendFriendRequest,
    handleUnFollow,
    handleCancelFriendRequest,
    handleAcceptFriendRequest
  } = props

  const friends = profile?.friends ?? []
  const sendFriendRequests = profile?.friendRequests ?? []
  const friendRequests = profile?.sendFriendRequests ?? []
  const followings = profile?.followers ?? []

  // check da ket ban
  const alreadyFriend = friends.some((friend: string) => friend === user?._id)
  // neu chua ket ban => check send friend request
  const checkSendFriendRequest = sendFriendRequests.some(
    (item: string) => item === user?._id
  )
  const checkFriendRequest = friendRequests.some(
    (item: string) => item === user?._id
  )

  // check theo doi
  const checkFollowing = followings.some((item: string) => item === user?._id)

  const [isSend, setIsSend] = useState(checkSendFriendRequest)
  const [isFollowed, setIsFollowed] = useState(checkFollowing)
  const [isFriend, setIsFriend] = useState(alreadyFriend)
  const [alreadySend, setAlreadySend] = useState(checkFriendRequest)

  const handleSend = () => {
    if (isFriend) {
      handleUnFriend()
      setIsFriend(false)
      setIsFollowed(false)
      setAlreadySend(false)
    } else {
      if (isSend) {
        handleCancelFriendRequest()
        setIsFollowed(false)
      } else {
        handleSendFriendRequest()
        setIsFollowed(true)
      }
      setIsSend(!isSend)
    }
  }

  const handleAccept = () => {
    handleAcceptFriendRequest()
    setIsFriend(true)
    setIsFollowed(true)
  }

  const onFollow = () => {
    handleFollow()
    setIsFollowed(!isFollowed)
  }
  const onUnfollow = () => {
    handleUnFollow()
    setIsFollowed(!isFollowed)
  }

  // TH1: da ket ban
  if (isFriend) {
    return (
      <div className="flex justify-end items-center my-4">
        <FollowButton
          isFollowed={isFollowed}
          handleFollow={onFollow}
          handleUnFollow={onUnfollow}
        />
        <Button onClick={handleSend} type={'primary'}>
          Hủy kêt bạn
        </Button>
      </div>
    )
  }

  // TH2: chua ket ban
  else {
    // check trong sendFriendRequest
    if (isSend) {
      return (
        <div className="flex justify-end items-center my-4">
          <FollowButton
            isFollowed={isFollowed}
            handleFollow={onFollow}
            handleUnFollow={onUnfollow}
          />

          <Button type={'primary'} onClick={handleSend}>
            Đã gửi lời mời kết bạn
          </Button>
        </div>
      )
    }
    // check trong friendRequests
    if (alreadySend) {
      return (
        <div className="flex justify-end items-center my-4">
          <Button className="mr-4" type="primary" onClick={handleAccept}>
            Chấp nhận
          </Button>
          <Button onClick={() => console.log('ko chap nhan ket ban')}>
            Hủy
          </Button>
        </div>
      )
    }
    return (
      <div className="flex justify-end items-center my-4">
        <FollowButton
          isFollowed={isFollowed}
          handleFollow={onFollow}
          handleUnFollow={onUnfollow}
        />

        <Button onClick={handleSend}>Kết bạn</Button>
      </div>
    )
  }
}

export default AddFriend
